![logo_Riveri-Bot](https://i.postimg.cc/bN5fhhwg/Riveri-Bot.png)
# Tópicos
- [Presentación](#Presentación)
- [¿Cómo usarlo?](#Guia_de_uso)
- [Creditos](#Agradecimientos)
- [Framework](#Framework)
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
    :heavy_check_mark: `let miVariable = "Hola!"`.\
    :cross_mark: `let mi variable = "Hola!"`.\
    

## 1. Creación de la sesión de WhatsApp:
``` ts
// Usamos Javascript y NodeJS para crear el entorno de trabajo de programación, ambos son lenguajes de programación. Por lo tanto usaremos su sintaxis como a continuación:
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");

const client = new Client({authStrategy: new LocalAuth(), puppeteer: {headless: false}});

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ // empezarAuntenticacion(); // Se inicia la sesión del bot, en caso de no    │
//  │ estar auntenticado se pide el escaneo del QR. Posteriormente se envía un mensaje  │
//  │ al grupo "StatusBot" de encendido, luego envía una confirmación a la consola      │
//  │ junto con una tabla.                                                              │
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
function empezarAuntenticacion(){
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Generación del Código QR :::::::::::::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.on("qr", (qr) => {
        console.log("[+]Test: QR Listo!");
        qrcode.generate(qr, {
        small: true
        })});
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
        client.on('auth_failure', msg => {console.log("Test: Auntenticado Fallido!", msg)});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    //  ┌───────────────────────────────────────────────────────────────────────────────────┐
    //  │ Preparación lista del cliente ::::::::::::::::::::::::::::::::::::::::::::::::::::│
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.on("ready", () => {
        console.log("[+] Prueba: Encendido " + "realizado con éxito".green.italic)});
    //  └───────────────────────────────────────────────────────────────────────────────────┘
        client.initialize();
    //  └───────────────────────────────────────────────────────────────────────────────────┘
    };

    empezarAuntenticacion()

``` 
