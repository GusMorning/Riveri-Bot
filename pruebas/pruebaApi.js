
const interface = require('readline-sync');
const fetch = require('node-fetch');

var operacion = interface.question('Ingrese su operacion: ');
if (operacion.includes("+")) {
  operacion = operacion.replace("+", "%2B")
}
if (operacion.includes("x2")){
  operacion = operacion.replace ("x2", "Power%5Bx%2C2%5D")
}
console.log(operacion);




const url = `http://api.wolframalpha.com/v2/query?appid=EL5KV3-XH24YPGWT6&input="${operacion}"&podstate=Result__Step-by-step%20solution&format=image&output=json`;
fetch(url)
  .then(response => response.json())
  .then((data) => {
    data = data.queryresult.pods[4].subpods[0].img
    console.log(data);
  });
