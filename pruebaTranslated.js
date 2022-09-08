const encodedParams = new URLSearchParams();
encodedParams.append("q", "Te amo Fio");
encodedParams.append("target", "es");
encodedParams.append("source", "en");
const fetch = require('node-fetch')
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'c8a1811b51msh6bc660bff53c5fap1a5fc7jsn33c6cc586703',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => console.log(response.data.translations[0].translatedText))
	.catch(err => console.error(err));

