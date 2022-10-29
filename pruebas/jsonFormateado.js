const fetch = require('node-fetch');
const interface = require('readline-sync');
var json2plain = require('json2plain');
function ucFirst(string) {
    return '[' + string.charAt(0).toUpperCase() + string.slice(1) + ']';
  }
  
  var options = { 
    list: '> ',
    indent: '',
    separator: ' = ',
    formatKey: ucFirst,
    formatValue: ucFirst
  };
  
fetch('Https://swapi.dev/api/vehicles/4/ ')
    .then(response => response.json())
    .then(function(response){
        console.log(json2plain(response, options))
    })