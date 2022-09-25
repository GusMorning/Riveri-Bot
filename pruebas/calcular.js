const interface = require("readline-sync");
do  {
    const operacion = interface.question('Ingrese su operacion: ');
    function evil(fn) {
        return new Function('return ' + fn)();
      }
    const operacionResultado = evil(operacion);
    console.log(operacionResultado);    
}while (true);


