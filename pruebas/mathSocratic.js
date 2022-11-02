const mathsteps = require('mathsteps');
const interface = require('readline-sync');
const operacion = interface.question('Ingrese su operacion: ')
const steps = mathsteps.solveEquation(operacion);
let result = {}
steps.forEach(step => {
    result += "[Paso] " + step.changeType + '\n';                  // e.g. change: SIMPLIFY_LEFT_SIDE
    result += "[+] " + step.newEquation.ascii() + '\n';   // e.g. after change: 5x = 35
    result += "[+] " + step.newEquation.ascii()+ '\n';
});
console.log(result);
