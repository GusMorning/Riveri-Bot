const fetch = require('node-fetch')
const q = 'caracas'
const url = 'http://api.weatherstack.com/current?access_key=00b5423454f994931ec9a049dc7b1b06&query=' + q
fetch(url)
  .then(response => response.json())
  .then((data) => {
    const mensaje = `
- Nombre: ${data.location.name}
- País: ${data.location.country}
- Latitud: ${data.location.lat}
- Zona horaria: ${data.location.timezone_id}
- Fecha y hora: ${data.location.localtime}
- Clima: ${data.current.weather_descriptions}
- Temperatura: ${data.current.temperature}
- Velocidad del viento: ${data.current.wind_speed}
- Humedad: ${data.current.humidity}
- Dia?: ${data.current.is_day}
`;
console.log(mensaje);
  });
