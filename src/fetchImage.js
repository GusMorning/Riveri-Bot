var https = require('https'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs');                                                    

var url = 'https://textpro.me/images/user_image/2022/10/635ea72e65305.jpg';                    

https.request(url, function(response) {                                        
  var data = new Stream();                                                    

  response.on('data', function(chunk) {                                       
    data.push(chunk);                                                         
  });                                                                         

  response.on('end', function() {                                             
    fs.writeFileSync('image.png', data.read());                               
  });                                                                         
}).end();