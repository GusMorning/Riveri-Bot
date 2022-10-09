const axios = require('axios');
async function gatitos(){
    const response = await axios('https://catfact.ninja/fact');
console.log(response.data.fact);
}
gatitos()

