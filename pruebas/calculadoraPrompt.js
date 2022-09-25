const interface = require('readline-sync');
do{
    console.log("\n\n\n\n\n\n\n\n\n");
    console.log("1.- Sumar");
    console.log("2.- Resta");
    console.log("3.- Multiplicar");
    console.log("4.- Dividir");
    console.log("5.- Salir");
    response = interface.question("Que operacion desea realizar, escribe el numero: ")

    if(response != "5"){
        const firstNumber = interface.question("[ ] Dame el primer numero: ");
        const secondNumber = interface.question("[ ] Dame el segundo numero: ");

        switch(response) {
            case "1":
                var result = parseInt(firstNumber) + parseInt(secondNumber);
                console.log("[ + ] El resultado es: " + result);
                break;
            case "2":
                var result = parseInt(firstNumber) - parseInt(secondNumber);
                console.log("[ + ] El resultado es: " + result);
                break;
            case "3":
                var result = parseInt(firstNumber) * parseInt(secondNumber);
                console.log("[ + ] El resultado es: " + result);
                break;
            case "4":
                var result = parseInt(firstNumber) / parseInt(secondNumber);
                console.log("[ + ] El resultado es: " + result);
                break;
            default:
                break;
        }
    }
}while(response != "5")