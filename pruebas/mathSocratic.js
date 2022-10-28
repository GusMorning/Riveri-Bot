const mathsteps = require('mathsteps');
const interface = require('readline-sync');
const operacion = interface.question('Ingrese su operacion: ')
const steps = mathsteps.solveEquation(operacion);
let result = {}
steps.forEach(step => {
    result += "before change: " + step.oldEquation.ascii() + '\n';  // e.g. before change: 2x + 3x = 35
    result += "change: " + step.changeType + '\n';                  // e.g. change: SIMPLIFY_LEFT_SIDE
    result += "after change: " + step.newEquation.ascii() + '\n';   // e.g. after change: 5x = 35
    result += "# of substeps: " + step.substeps.length + '\n';      // e.g. # of substeps: 2
});
