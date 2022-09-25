![logo_Riveri-Bot](https://i.postimg.cc/bN5fhhwg/Riveri-Bot.png)
# Tópicos
- [Presentación](#Presentación)
- [¿Cómo usarlo?](#Guia_de_uso)
- [Creditos](#Agradecimientos)
- [Framework](#Framework)
- [Esquema](#Esquema_Didactico_Del_Bot)
# Presentación
Riveri-Bot es un chat-bot de ayuda para difundir información relevante del Municipio Escolar para la I.E "Nicanor Rivera Cáceres" 7050.
- Su desarollo empezó desde `Enero del 2022`
- Establecido en la red social `WhatsApp` para mayor alcance de usuarios.
- Programado en `Javascript y NodeJS`. 
- Cuenta con `funcionalidades diversas` y un entorno amigable para el usuario
- Tiene gran parte del código base ```main.js``` documentado para una fácil comprensión.
# Guia de uso
## 1. Saludo:
Recibirás el saludo principal del bot, enviándote una opción para presionar y seguir con las opciones del menú\
`Comando: Hola, ola`
![Imagen](https://i.postimg.cc/pXJ0Z402/ola.jpg)
## 2. Opciones:
Recibirás el menú interactivo de las `Opciones`del bot:\
`Comando: Opciones`
![Imagen_Opciones](https://i.postimg.cc/65ZKpW5M/opciones.jpg)\
![Imagen_Opciones2](https://i.postimg.cc/rF2VW0HB/OPCIONES2.jpg)
## 3. Preguntas
Recibirás el `response`donde podrás hacer preguntas y estas se reenvian al lugar pertinente para leerlas.\
`Comando: Preguntas`\
![Imagen_Preguntas](https://i.postimg.cc/yN4yCTpf/2147483648-210496.jpg)
## 4. Sugerencias:
Recibirás el `response` donde podrás hacer sugerencias que podrán ser leidas por nosotros al ser enviadas a nosotros
![Imagen_Sugerencias](https://i.postimg.cc/PJXBzwg4/2147483648-210498.jpg)
## 5. ¿Quiénes somos?:
Recibirás la presentación de nuestro Municipio Escolar con una imagen referencial.\
`Comando: ¿Quiénes somos?:`
![Imagen_Quienes_Somos](https://i.postimg.cc/Hk0W2QRG/2147483648-210500.jpg)
## 6. Plan Evolutivo:
Recibirás el `documento` en pdf del Plan Evolutivo del año 2022:\
`Comando: Plan evolutivo`:
![Imagen_Plan_Evolutivo](https://i.postimg.cc/BvPxvZvQ/2147483648-210508.jpg)
# Framework para la creación de Bots
# ![Imagen_Framework](https://i.postimg.cc/0NVtQzQw/Riveri-Bo1t.png)
## Las bases: ¿Qué es un lenguaje de programación y cómo lo usaremos?
- Es una serie de instrucciones que indicamos a la máquina para realizar en secuencia (Queriendo decir de forma organizada), utilizan una sintaxis referencia del inglés, por lo que encontrarás expresiones en Javascript como:

```js
if = Quiere decir "Si esto ocurre", sacado de la palabra en inglés
```

> Si no se comprende del todo, no hay problema. Continua prestando atencion y lo entenderás completamente >
Entonces, tal como si ordenaramos a la computadora que hiciera algo, pasa lo mismo con el lenguaje de programación. Estaremos indicando qué, cómo y cuándo hará una acción. ***¿Qué dices, los ponemos a prueba?***
- Prueba 01: Queremos sumar dos números, y saber su resultado. ¿Cómo lo haremos?
> ##### Consejo: `let` quiere decir que vas a darle valor a algo, en este caso se llama `variable`. Como si hicieras una ecuación, vamos a estar dándole el valor a una incognita `x` lo mismo pasará aquí con una variable:
```js
//  ┌─────────────────────────────Declarando el primer valor─────────────────────────────┐
// - Tenemos la primera variable o incognita al que le asignaremos un valor:
let numero1 = 2
// - Es decir, numero1 va a ser igual a 2 unidades.
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────Declarando el segundo valor─────────────────────────────┐
// - Tenemos la segunda variable o incognita al que le asignaremos un valor:
let numero2 = 4
// - Es decir, numero2 va a ser igual a 4 unidades.
//  └───────────────────────────────────────────────────────────────────────────────────┘
```
Ahora, si te dijera esta oración: `Si x es igual a 2 y z es igual a 4, ¿cuánto suman x + y? La respuesta sería 6`, lo mismo con el código que hicimos arriba:
> ##### Consejo: Se utiliza un punto y coma al final de cada expresión como `let` para dar a conocer que hasta allí termina y sigue lo siguiente.
```js
let numero1 = 2;
let numero2 = 4;
let suma = numero1 + numero2;
// El resultado sería... 6 ya que es numero1(2) + numero2(4) = 6
```
¡Excelente! Ahora sigamos a ***Prueba 02***: Queremos que la suma de dos números se muestren en la consola donde ejecutamos el código:
> ##### Consejo: Se le llama la consola a la terminal de comando. En Window es CMD (Símbolos del Sistema) y para enviar algo allí, debemos usar el comando `console.log()` en el interior del parentesís estará la expresión o valor que queremos mostrar en pantalla
```js
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
let numero1 = 2;
let numero2 = 4;
let suma = numero1 + numero2;
//  └───────────────────────────────────────────────────────────────────────────────────┘
console.log(suma)
// Ahora, ¿Qué mostrará la consola? Veamos:
╔═════════╗
║ Consola  
╠═════════╣
║ 6         
╚═════════╝
```
¡Wow, estás avanzando rápido! Pronto bucearás con los tuborones del Javascript, ya te veré.
> ##### Consejo: Existen tres tipos de `variables`:
1. `string`: Es para asignarle texto a nuestra variable como valor.\
    `let miNombre = "Gustavo"`\
    Aún así, ¿Solo son `strings` aquella variables que tienen texto? **No** pero ya lo estas comprendiendo. Independientemente que pudiera ser texto, tiene la capacidad de representar un número, veamos:\
    `let miEdad = "17"`\
    Pero... ¿Si son números, los puedo sumar? **No**, ya que el sistema lo detecta como si fuera una letra, más no un número por ende si lo intentas te dará error. 
2. `number`: Aquí solo aplicarán cuando a la variable que tengamos le asignemos solo valores numericos. Por ejemplo:\
    `let alturaEnMetros = 1.86`\
    Algo interesante, ¿Cómo puedo unir una variable `number` con una `string`? ¡Excelente pregunta!
 ```js
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
let miPeso = 69;
let kilogramos = "kg";
let miPesoConvertido = miPeso + kilogramos;
//  └───────────────────────────────────────────────────────────────────────────────────┘
// Ahora, ¿Qué mostrará la consola? Veamos:
╔═════════╗
║ Consola  
╠═════════╣
║ 69 kg         
╚═════════╝
```
3. `boolean`: Aplica cuando el valor de variable es `true` o `false`, ¿Qué quiere decir esto? Observemos: 
    - Si nos dicen que `Pedro tiene la misma edad que Jaimito, entonces si digo Jaimito tiene la misma edad que Pedro`. Estaré diciendo algo **verdadero** o **true**
    - Pero si digo: `Entonces, Jaimito es mayor que Pedro` contará como **falso** o **false**.

> ##### Consejo: ¿Cuáles son los tipos de formas de declarar una variable?
1. Usando `const`: Esta es una de las más importantes, pues indicará que el valor de la variable no podrá cambiar y será usado en todo el código.
    Es especialmente útil para cuando busquemos usar una librería o Framework para declarar un valor de ellas, por ejemplo:\
    `const colors = require('colors');`\
    En este fragmento de código hemos llamado a la librería [colors](https://www.npmjs.com/package/colors) la cual se utiliza frecuentemente para darle colores a nuestros comandos dentro de la consola.
2. Usando `var` y `let`: Nos sirve jerarquicamente para definir variables las cuales sus valores pueden variar, como aquí:
```js
var numero1 = 2;
var numero2 = 4;
var suma = numero1 + numero2;
var suma1 = + 1;
╔═════════╗
║ Consola  
╠═════════╣
║ 7         
╚═════════╝
```

> ##### Consejo:  Javascript es case sensitive, es decir detecta las mayúsculas y minusculas, espacios y caracteres especiales, afectando así a los nombres de las variables. Ahora, **¿Cómo es la forma correcta de hacerlo?**:
1. `declarando sin espacios intermedios`:\

| Expresión | Correcto o incorrecto |
| ------------- | ------------- |
| :heavy_check_mark: | `let miVariable = "Hola!"`.|

| Expresión | Correcto o incorrecto |
| ------------- | ------------- |
| ❌ | `let mi variable = "Hola!"`|
2. Respestando las `mayúsculas` y `minusculas`:

| Expresión | Correcto o incorrecto |
| ------------- | ------------- |
| :heavy_check_mark: | `let; for; switch; var; console.log; if; else if`.|

| Expresión | Correcto o incorrecto |
| ------------- | ------------- |
| ❌ | `let mi variable = "LET; foR; Switch; Var; Console.log, iF; Else if`.`|
    
3. Terminando de cerrar los `caracteres`:

| Expresión | Correcto o incorrecto |
| ------------- | ------------- |
| let texto = "Hola!"  | :heavy_check_mark: |
| let texto = "hola  | ❌  |
| let texto = 'Hola!'  | :heavy_check_mark: |
| let texto = Hola!  | ❌ |
| console.log(texto)  | :heavy_check_mark: |
| console.log(texto   | ❌ |
| console.log("texto")  | :heavy_check_mark: |
| console.log("texto)  | ❌ |

> ##### Consejo: ¿Cómo manejar los Array? Un `Array` es aquel conjunto de elementos o valores dentro de una variable, como en el ejemplo:
- Puedes verlo como una analogía a una pildora, en su interior lleva un conteindo encapsulado y así lo mismo pasa con los arrays:
```js
// Ejemplo:
let alumnos = (
    {capsula 1},
    {capsula 2}
)
// Aplicación
let alumnos = (
    {
        nombre: "Pedro",
        edad: "17",
        residencia: "Etiopia"
    },
    {
        nombre: "Juanito",
        edad: "16",
        residenia: "Paises Bajos"
    }
)
console.log(alumnos)
```
> #### Consejo: El manejo de if, aquí necesitarás un poco de atención pues tiene un concepto nuevo:
- `if` quiere decir, `qué pasaría si?`. Veamos una analogía de una frase que reconocerán:
"*Si sales con bajas notas*, te castigo", hay un **condicional** "si sales con bajas notas" y una **consecuencia** "te castigo". Ahora volvamos esto a código!
``` ts
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
let saliBajoDeNotas = true; // Esto quiere decir que sí, salió bajo de notas
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  :: if tiene una estructura así: if(condicional){¿Qué harás si ocurre eso?}
    if(saliBajoDeNotas = true) {
        console.log("Te castigaron")} 
//  Aquí se observa que se creó una condicional donde si salias bajo de notas, se 
//   imprimia en la consola "Te castigaron"
//  └───────────────────────────────────────────────────────────────────────────────────┘
``` 
> ##### Consejo: En javascript se utilizan los simbolos matemáticos como `suma + ` `resta - ` a los que llamaremos Operadores lógicos, y aquí tendrás la tabla completa de ellos:

| Nombre | Operador abreviado	| Significado |
| ------------- | ------------- | ------------- |
| Asignación | x = y | x = y |
| Asignación de adición | x += y | x = x + y |
| Asignación de resta | x -= y | x = x - y |
| Asignación de multiplicación | x *= y | x = x * y |
| Asignación de división | x /= y | x = x / y |
| Asignación de residuo | x %= y | 	x = x % y |
| Asignación de exponenciación | x **= y | x = x ** y|
| Asignación de desplazamiento a la izquierda | x <<= y | x = x << y |
| Asignación de desplazamiento a la derecha | x >>= y | x = x >> y |
| Asignación AND lógico | x &&= y | x && (x = y) |
#####  Operadores de comparación
| Operador | Descripción | Ejemplos que devuelven true |
| ------------- | ------------- | ------------- |
| Igual (==) | 	Devuelve true si los operandos son iguales. | 3 == var1 ; "3" == var1 ; 3 == '3'|
| No es igual (!=) | Devuelve true si los operandos no son iguales. | var1 != 4 ; var2 != "3" |
| Estrictamente igual (===) | Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS. | 3 === var1 |
| Desigualdad estricta (!==) | Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo. | var1 !== "3" ; 3 !== '3' |
| Mayor que (>) | Devuelve true si el operando izquierdo es mayor que el operando derecho. | var2 > var1 ; "12" > 2 |
| Mayor o igual que (>=) | Devuelve true si el operando izquierdo es mayor o igual que el operando derecho. | var2 >= var1 ; var1 >= 3 |
| Menor que (<) | Devuelve true si el operando izquierdo es menor que el operando derecho. | var1 < var2 ; "2" < 12|
| Menor o igual (<=) | Devuelve true si el operando izquierdo es menor o igual que el operando derecho. | var1 <= var2 ; var2 <= 5 |

> ##### Consejo: ¿Cómo usar `function`? Una vez hayas comprendido el uso de `if` esta parte te será rápido de entender. Así que pongamoslo a prueba!
- La estructura de function consta de lo siguiente:\
`function nombreDeLaVariable( Dato interior que se procesará dentro ) {
    dato interior que será procesado aquí }`
¿Qué dices, facilito no? 
- Prueba 03: Vamos a elaborar una cálculadora automática de área de un cuadrado donde podamos ingresar los datos del lado.
```js 
function calcularArea(lado){
    let area = lado * lado;
    console.log("El resultado del área es: ", area, " m2") // Aquí se muestra en consola el resultado
    return area
}
calcularArea(5) // Resultado = El resultado del área es:  25  m2
```

## 1. Creación de la sesión de WhatsApp:
``` ts
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  ::::::::::: Definimos la librería whatsapp-web.js de pedrolopez
const { Client, LocalAuth } = require('whatsapp-web.js');
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  ::::::: Importamos la librería que nos permitirá imprimir un código QR en a consola para iniciar sesión
const qrcode = require("qrcode-terminal");
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  ::::: Declaramos una variable llamada client, que será de importancia pues la usaremos para todas las funciones que creemos, como iniiciar sesión, recibir mensajes, encender el bot, etc
/* 
client tiene varios aspectos como:
client.on 'authenticated': comienza el inicio y escaneo de la sesión actual.
client.on 'auth_failure': ocurre si el inicio de sesión es incorrecto o erroneo.
client 'initialize': para finalizar el proceso de inicio de sesión, y comenzar a utilizar el código.
client.on 'ready': cuando el cliente está listo para recibir mensajes
/*
const client = new Client({authStrategy: new LocalAuth(), puppeteer: {headless: false}});
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ // empezarAuntenticacion(); // Se inicia la sesión del bot, en caso de no    │
//  │ estar auntenticado se pide el escaneo del QR. 
//  └───────────────────────────────────────────────────────────────────────────────────┘

function empezarAuntenticacion(){
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Generación del Código QR :::::::::::::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.on("qr", (qr) => {
        console.log("[+]Test: QR Listo!");
        qrcode.generate(qr, {small: true})});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Autenticación del cliente correcta :::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.on('authenticated', () => {
        console.log("[+] Prueba: Auntenticado " + "realizado con éxito".green.italic)});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Autenticación fallida ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.on('auth_failure', msg => {console.log("Test: Autenticado Fallido!", msg)});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Preparación lista del cliente ::::::::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
        client.on("ready", () => {
        console.log("[+] Prueba: Encendido " + "realizado con éxito".green.italic)});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
        client.initialize();
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    };

    empezarAuntenticacion()

``` 
# Esquema didáctico en el Bot
![riveri-bot_esquema drawio](https://user-images.githubusercontent.com/100885703/187082582-b521772c-bce4-46d8-9fd6-552f50beaeb5.png)
[Presionar aquí para observar el pdf del diagrama actualizado](https://github.com/GusMorning/Riveri-Bot/files/9634919/riveri-bot_esquema-Pagina-3.drawio.pdf)


Agradecimientos a https://github.com/pedroslopez/whatsapp-web.js
