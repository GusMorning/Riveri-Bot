const axios = require('axios');
const response = await axios('https://catfact.ninja/fact');
console.log(response.fact);

