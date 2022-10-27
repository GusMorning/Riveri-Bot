const responseData = [
    {
      "code": "AA1", 
      "id": 1, 
      "name": "Ubication 1"
    }, 
    {
      "code": "AA2", 
      "id": 2, 
      "name": "Ubication 2"
    }, 
    {
      "code": "AA3", 
      "id": 3, 
      "name": "Ubication 3"
    }, 
    {
      "code": "AA3A", 
      "id": 3, 
      "name": "Ubication 3A"
    }, 
    {
      "code": "AA4", 
      "id": 4,
      "name": "Ubication 4",
    },
  ];
  
  const localizarTodasLasInstancias = (propiedad, valor) => {
    return responseData.filter( element => {
        return element[propiedad] === valor;
    })
  }
  
  const localizarPrimeraInstancia = (propiedad, valor) => {
    return localizarTodasLasInstancias(propiedad, valor)[0] || {};  
  }
  
  console.log('todas');
  console.log(localizarTodasLasInstancias( 'code', 'AA4'));
  console.log('1ra');
  console.log(localizarPrimeraInstancia('id', 3));
  console.log('todas');
  console.log(localizarTodasLasInstancias('id', 3));
  console.log('todas');
  console.log(localizarTodasLasInstancias('name', 99));