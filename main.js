//
// ────────────────────────────────────────────────────────────────── I ──────────
// *  :::::: I M P O R T A C I O N E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
/* 
    ┌─────────────────────────────────────────────────────────────────────────┐
*   │::::::Whatsapp Web Puppeteer Library    : :  :   :    :     :     :     :│
    └─────────────────────────────────────────────────────────────────────────┘
*/
const {
//  ┌───────────────────────────┐
    Client, //──────────────────│
    LegacySessionAuth, //───────│
    LocalAuth, //───────────────│
    MessageMedia, //────────────│
    List, //────────────────────│
    Buttons, //─────────────────│
    ChatTypes, //───────────────│
    Status, //──────────────────│
//  └───────────────────────────┘

} = require("whatsapp-web.js");
/* 
    ┌─────────────────────────────────────────────────────────────────────────┐
*   │::::::Declaraciones Exportadas del modulo ./src/headers.js    :  :   :  :│
    └─────────────────────────────────────────────────────────────────────────┘
*/
const {
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │                        Menus desplegables de Lista                           │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ listaSaludo2, //── Función de Lista para menu de Saludo :::::::::::: │
    /* [1] */ listaOpciones, //── Función de Lista para menu de Opciones ::::::::: │
    /* [2] */ listaFunciones, //── Función de Lista para menu de Funciones ::::::: │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │                      Texto utilizado en las funciones                        │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ preguntasTexto, //── Texto de Opción [Preguntas] ::::::::::::::::::: │
    /* [1] */ sugerenciasTexto, //── Texto de Opción [Sugerencias] ::::::::::::::: │
    /* [2] */ quienesSomosTexto, //──Texto de Opción [¿Quiénes Somos] :::::::::::: │
    /* [3] */ instagramTexto, //── Texto de Opción [Redes Sociales] :::::::::::::: │
    /* [4] */ facebookTexto, //── Texto de Opción [Redes Sociales] ::::::::::::::: │
    /* [5] */ paginaWebTexto, //──Texto de Opción [Redes Sociales] ::::::::::::::: │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │               Ubicación de las imágenes enviadas en funciones                │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ ubicacionQuienesSomos, //── Ubicación de Opción [¿Quiénes Somos] ::: │
    /* [1] */ ubicacionInstagram, //── Ubicación de Opción [Redes Sociales] :::::: │
    /* [2] */ ubicacacionFacebook, //──Ubicación de Opción [Redes Sociales] :::::: │
    /* [3] */ ubicacionPaginaWeb, //── Ubicación de Opción [Redes Sociales] :::::: │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │               Array de conjunto para funciones especiales                    │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ instagram, //── Ubicación y texto de Opción [¿Quiénes Somos] ::::::: │
    /* [1] */ facebook, //── Ubicación y texto de Opción [Redes Sociales] :::::::: │
    /* [2] */ paginaWeb, //──Ubicación y texto de Opción [Redes Sociales] :::::::: │
    /* [3] */ quienesSomos, //── Ubicación y texto de Opción [Redes Sociales] :::: │
    /* [4] */ //empezarAuntenticacion, //── Enciende el bot :::::::::::::::::::::: │
    /* [4] */ mensajesEntrantes, //── Envia los mensajes entrantes a un bot :::::: │
//  └──────────────────────────────────────────────────────────────────────────────┘
} = require('./src/headers.js')
/* 
    ┌─────────────────────────────────────────────────────────────────────────┐
*   │::::::Miscelanios importados                                  :  :   :  :│
    └─────────────────────────────────────────────────────────────────────────┘
*/
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │                         Librerias nativas de NodeJS                          │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ const fetch = require("node-fetch"); 
    /* [1] */ const readline = require("readline");
    /* [2] */ const fs = require("fs"); 
    /* [3] */ const send = require("process"); 
    /* [4] */ const rl = readline.createInterface({input: process.stdin, output: process.stdout,}); 
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │                               Terceros                                       │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ var colors = require("colors");
    /* [1] */ const ignoreCase = require('ignore-case');
    /* [2] */ const qrcode = require("qrcode-terminal");
    /* [3] */ const { Puppeteer } = require("puppeteer");
    /* [4] */ const ProgressBar = require('progress');
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
//* │                          Definiciones para funciones                         │
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ const DELAY_TIME = 500; //ms
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var dia = fechaHora.toDateString();
    var familia = {};
    var diasSemanales = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo")
    function mensajeDeActivacion(StatusBot, Horas, Minutos, Dia, Fecha) {
    this.StatusBot = StatusBot
    this.Horas = Horas
    this.Minutos = Minutos
    this.Dia = Dia
    this.Fecha = Fecha}
    familia.prueba1 = new mensajeDeActivacion(
    "Encendido", 
    horas, 
    minutos, 
    diasSemanales[fechaHora.getDay()], 
    fechaHora.toLocaleDateString());
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ const client = new Client({authStrategy: new LocalAuth(), puppeteer: {headless: false}});
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
        function enviarMedia(ubicacionDelArchivo, captionMensaje) {
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(ubicacionDelArchivo);
                client.sendMessage(message.from, media, {
                    caption: captionMensaje
                });
            }, DELAY_TIME);
        };
//  └──────────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── II ──────────
//*   :::::: F U N C I O N E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ // empezarAuntenticacion(); // Se inicia la sesión del bot, en caso de no    │
//  │ estar auntenticado se pide el escaneo del QR. Posteriormente se envía un mensaje  │
//  │ al grupo "StatusBot" de encendido, luego envía una confirmación a la consola      │
//  │ junto con una tabla.                                                              │
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    function empezarAuntenticacion(){
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
//  │ Generación del Código QR :::::::::::::::::::::::::::::::::::::::::::::::::::::::::│
//  └───────────────────────────────────────────────────────────────────────────────────┘
    client.on("qr", (qr) => {
    console.log("[+]Test: QR Listo!");
    qrcode.generate(qr, {
    small: true
    })});
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Preparación lista del cliente ::::::::::::::::::::::::::::::::::::::::::::::::::::│
//  └───────────────────────────────────────────────────────────────────────────────────┘
    client.on("ready", () => {
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    // Recibe los chats con .getChats()
    client.getChats().then((chats) => {
//  └───────────────────────────────────────────────────────────────────────────────────┘
    // Define el chat donde se enviará el mensaje de encendido
    const notificarEncendido = chats.find((chat) => chat.name === "MensajesEntrantes");
    console.log("[+] Prueba: Encendido " + "realizado con éxito".green.italic);
//  └───────────────────────────────────────────────────────────────────────────────────┘
    // Envia un mensaje, buscando dentro del array del chat "notificarEncendido"
    // la sección id, en el contenido serialized
    // "_serialized": "false_120363024475150588@g.us_3EB047D8977E123156AC_51942003865@c.us"
    client.sendMessage(
    notificarEncendido.id._serialized,
    `Bot encendido: \n [Hora: '${horas} am'] \n [Minutos: '${minutos}'] \n [Día: '${diasSemanales[fechaHora.getDay()]}'] \n [Fecha: '${fechaHora.toLocaleDateString()}']`);
//  └───────────────────────────────────────────────────────────────────────────────────┘
/** ┌─────────┬─────────────┬───────┬─────────┬─────────┬─────────────┐
    │ (index) │  StatusBot  │ Horas │ Minutos │   Dia   │    Fecha    │
    ├─────────┼─────────────┼───────┼─────────┼─────────┼─────────────┤
    │ prueba1 │ 'Encendido' │  21   │    1    │ 'Lunes' │ '21/8/2022' │
    └─────────┴─────────────┴───────┴─────────┴─────────┴─────────────┘ */
    console.table(familia);});});
//  └───────────────────────────────────────────────────────────────────────────────────┘
    client.initialize();
//  └───────────────────────────────────────────────────────────────────────────────────┘
};
empezarAuntenticacion();
client.on("message", async (message) => {
// ────────────────────────────────────────────────────────────────────────────────
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
* │ Enviar Mensajes entrantes a la consola                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ console.log(`Mensaje recibido de`, `${message.from}:`, `${message.body}`);
//  └───────────────────────────────────────────────────────────────────────────────────┘
/* 
 ┌─────────────────────────────────────────────────────────────────────────┐
*│ Enviar mensajes entrantes al grupo de registro                          │
 └─────────────────────────────────────────────────────────────────────────┘
 */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ client.getChats().then((chats) => {
    /* [1] */ const Dxversity = chats.find((chat) => chat.name === 'MensajesEntrantes');
    /* [2] */ client.sendMessage(Dxversity.id._serialized, `[Mensaje]: ${message.from}: [Body]: ${message.body} [Tiempo]: ${horas} : ${minutos}`)});
//  └───────────────────────────────────────────────────────────────────────────────────┘
    let msg = message
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (msg.body === '!ping reply') {msg.reply('pong')};
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (msg.body.startsWith('/ACT ')) {
/* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
* │                           Esquema de comandos                               │
* │                             [1]         [2]                                 │
* │                       /ACT Peso(kg) Clasificacion                           │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
let masa = msg.body.split(' ')[1];
let rangoDeEdad = msg.body.split(' ')[2]
let clasificaciones = [0.6, /*/ Hombres /*/ 0.5, /*/ Ancianos, Mújeres /*/ 0.45 /*/ Anciana /*/]

/* --------------------------------- Función -------------------------------- */
switch(rangoDeEdad){
  case "Hombre":
    let ACT = clasificaciones[0] * masa;
    msg.reply("[Fórmula realizada con éxito] su agua corporal total en su cuerpo es de: " + ACT)
    break;
  case "Mujer":
  case "Anciano":
    let ACT1 = clasificaciones[1] * masa;
    msg.reply("[Fórmula realizada con éxito] su agua corporal total en su cuerpo es de: " + ACT1 + "lt")
    break;
  case "Anciana":
    let ACT2 = clasificaciones[2] * masa;
    msg.reply("[Fórmula realizada con éxito] su agua corporal total en su cuerpo es de: " + ACT2)
    break;
        }}

        if (msg.body.startsWith("./pruebasiu")){
            msg.reply("hola")
        }







    })
