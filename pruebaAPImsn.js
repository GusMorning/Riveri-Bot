const fetch = require('node-fetch')
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26934089aemsh5d595b71f3864d3p1b4506jsn3a2e9975b98f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
var mensaje = "Hola";
function añadirMensaje(dato){
	mensaje = mensaje.concat(' ', dato)
	return mensaje
}

const delay = ms => new Promise(res => setTimeout(res, ms));
let bgData = {};
let bgData1 = {};
q = 'Lima'
fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${q}`, options1)
	.then(response => response.json())
	.then(response => {
		bgData = `
		${ubicacion.name}
		${ubicacion.region}
		${ubicacion.country}
		${ubicacion.lat}
		${ubicacion.lon}
		${ubicacion.tz_id}
		${ubicacion.localtime}`
	})
	.catch(err => console.error(err));
	await delay(5000);
	console.log(bgData);

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26934089aemsh5d595b71f3864d3p1b4506jsn3a2e9975b98f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Lima', options2)
	.then(response => response.json())
	.then(response => {
		let astronomy = response.astronomy.astro;
		bgData1 = `
		Datos astronómicos
		${astronomy.sunrise}
		${astronomy.sunset}
		${astronomy.moonrise}
		${astronomy.moonset}
		${astronomy.moon_phase}
		${astromomy.moon_illumination}
		`
	})
	.catch(err => console.error(err));
	await delay(5000);
	console.log(bgData1);