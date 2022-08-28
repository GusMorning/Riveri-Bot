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
