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
    Client, //───────│
    LocalAuth, //───────────────│
    MessageMedia, //────────────│
    List, //────────────────────│
    Buttons, //─────────────────│
    ChatTypes, //───────────────│
    Status,

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
    /* [6] */ calculoRenal, // Texto de Cálculo Renal [Calculadora] :::::::::::::: │
    /* [7] */ deficitDeHierro, // Texto de Déficit de Hierro [Calculadora] ::::::: │
    /* [8] */ chistes, // Chistes :::::::::::::::::::::::::::::::::::::::::::::::: │
    botMenu,
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
    /* [5] */ mensajesEntrantes, //── Envia los mensajes entrantes a un bot :::::: │
    /* [6] */ calcularIMC, //── Ubicación y texto de Calculadora de IMC :::::::::: │
    /* [7] */ planEvolutivo, //── Ubicación de Plan Evolutiv [Plan Evolutivo] :::: │
    /* [8] */ chistesFuncion,
    saludoNuevoBoton,
    saludoNuevo,
    saludoNuevoBoton1,
    botonProblema1,
    botonIntroduccion,
    botones,
    botonProblema2,
    botonP2ComoUsar,
    botonP2Comandos,
    botonProblema3,
    calcularAreaCirculo,
    calcularPerimetro,
    calcularAreaCirculoSinPi,
    calcularPerimetroSinPi,
    radioCuadrado,
    baseAltura,
    areaTriangulo,
    sumaDeLados,
    leyHeron,
    calcularAlturaTriangulo,
    calcularHipotenusa,
    calcularCateto,
    semiPerimetro,
    calcularVelocidad,
    calcularVelocidadKM,
    botonP3Comandos,
    botonP3ComoUsar,
    textos,
    listaBots,
    botonEulerBot,
    botonMediBot, //---
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
const { measureMemory } = require("vm");
const { ClientRequest } = require("http");
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
    /* [0] */ const client = new Client({authStrategy: new LocalAuth(), 	puppeteer: {
		args: ['--no-sandbox'],}});
    const component = new Buttons('test', [{body: 'Test', id: 'test-1'}], 'title', 'footer') // Reply button
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
//  ┌──────────────────────────────────────────────────────────────────────────────┐
        function enviarMedia(ubicacionDelArchivo, captionMensaje) {
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(ubicacionDelArchivo);
                client.sendMessage(message.from, media, {
                    caption: captionMensaje
                });
            }, DELAY_TIME);
        };
        function enviarMensaje(mensaje){
            client.sendMessage(msg.from, mensaje)
        }
        async function enviarAudio(ubicacionDelArchivo){
            let audio = MessageMedia.fromFilePath(ubicacionDelArchivo);
            await client.sendMessage(msg.from, audio, {sendAudioAsVoice: true});
        }
//  └──────────────────────────────────────────────────────────────────────────────┘
// Comienzo de la nueva actualización del bot:
if (msg.body.startsWith('pruebaMensaje')) {
    console.log(msg);
} 
else if (msg.body.startsWith('saludoNuevo')) {
    enviarMedia(botones.ubicacionSaludo);
    enviarAudio(`./media/saludo1.mp3`)
    client.sendMessage(msg.from, saludoNuevoBoton);
}
else if (msg.body.startsWith('✅ Introducción')) {
    client.sendMessage(msg.from, botonIntroduccion);
    enviarAudio(`./media/introduccion1.mp3`)
}
else if (msg.body.startsWith('Problemática 1️⃣')) {
    client.sendMessage(msg.from, botonProblema1);
    enviarMedia(botones.ubicacionProblema1);
}
else if (msg.body.startsWith('Problemática 2️⃣')) {
    client.sendMessage(msg.from, botonProblema2)
    enviarMedia(botones.ubicacionProblema2)
}
else if (msg.body.startsWith('¿Cómo puedo usar el Bot? 🥳')) {
    client.sendMessage(msg.from, botonP2ComoUsar)
}
else if (msg.body.startsWith('Lista de comandos 👩‍💻')) {
    client.sendMessage(msg.from, botonP2Comandos)
}
else if (msg.body.startsWith('Problematica 3️⃣')) {
    client.sendMessage(msg.from, botonProblema3)
    enviarMedia(botones.ubicacionProblema3)
}
else if (msg.body.startsWith('Lista de comandos 👨‍💻')) {
    client.sendMessage(msg.from, botonP3Comandos);
}
else if (msg.body.startsWith('¿Cómo usar? 🧮')){
    client.sendMessage(msg.from, botonP3ComoUsar)
}
else if (msg.body.startsWith('👩‍💻 Lista de Bots')){
    client.sendMessage(msg.from, listaBots)
    enviarMedia(botones.ubicacionListaDeBots, textos.textoListaBots)
}
else if (['Euler-Bot'].includes(message.body)) {
        enviarMedia(botones.ubicacionEulerBot);
        enviarMensaje(botonEulerBot)
}
else if (['/RCP', '/rcp', 'rcp', 'RCP', 'Rcp'].includes(message.body)){
    enviarMedia(botones.ubicacionRCP, textos.textoRCP)
}
else if (['/tips', '/tip', 'tips', 'tip', 'Tips', '/Tips'].includes(message.body)){
    enviarMedia(botones.ubicacionTips, textos.textoTips)
}
else if (['Directorio de teléfonos', '/teléfonos', '/Teléfonos', 'Teléfonos', 'teléfonos'].includes(message.body)){
    enviarMedia('./media/imagenDirectorio.png',textos.textoDirectorio)
}
else if (['Medi-Bot', 'medi-bot'].includes(message.body)) {
    enviarMedia(botones.ubicacionProblema2)
    client.sendMessage(message.from, botonMediBot)
}
/* --------------------------- Euler-Bot Comandos --------------------------- */
else if (msg.body.startsWith('/Calculo') || msg.body.startsWith('/calculo') || msg.body.startsWith('Calculo') || msg.body.startsWith('/Calcular') || msg.body.startsWith('Calcular') || msg.body.startsWith('/calcular')){
    let figura = msg.body.split(' ')[1];
    let clasificacion = msg.body.split(' ')[2];
    let a = msg.body.split(' ')[3];
    let b = msg.body.split(' ')[4];
    let c = msg.body.split(' ')[5];
    let d = msg.body.split(' ')[6];
    let e = msg.body.split(' ')[7];
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    let a1 = msg.body.split(' ')[3]; a1 = parseFloat(a1);
    let b1 = msg.body.split(' ')[4];
    let c1 = msg.body.split(' ')[5]; c1 = parseFloat(c1);
    let d1 = msg.body.split(' ')[6];
    const chat = await msg.getChat();
    if (['Triangulo', 'triangulo', 'triángulo'].includes(figura)) {
        if (clasificacion === 'Heron' || clasificacion === 'heron') {
            chat.sendStateTyping();
            let suma = Number(a) + Number(b) + Number(c);
            let semiP = semiPerimetro(a, b, c);
            let p = semiP;
            let area = leyHeron(a, b, c);
            area = Math.round(area, 2)
            let mensaje = `┌────────────┐\n├ *D A T O S ----------*\n└────────────┘\n┌────────────┐\n├ Lado a = ${a} cm\n├ Lado b = ${b} cm\n├ Lado c = ${c} cm\n├ Cálculo: Área de un triangulo \nsabiendo sus tres lados.\n└────────────┘\n┌────────────┐\n├ Formula:\n├ p = Semi perimetro\n├ p = ( a + b + c ) / 2\n├ p = ( ${a} + ${b} + ${c} ) / 2\n├ p = (${suma}) / 2\n├ p = ${semiP}\n└────────────┘\n├ S = √p (p - a) (p - b) (p - c)\n├ S = √${p} (${p} - ${a}) (${p} - ${b}) (${p} - ${c})\n├ S = ${area}\n├ Área = ${area} cm2\n└────────────┘`;
            enviarMedia('./media/imagenCalcularAreaHeron.png', mensaje)
        };
        if (clasificacion === 'Altura' || clasificacion === 'altura') {
            chat.sendStateTyping();
            let altura = calcularAlturaTriangulo(a, b, c);
            let suma = Number(a) + Number(b) + Number(c);
            let semiP = semiPerimetro(a, b, c);
            let p = semiP;
            let mensaje = '┌────────────┐\n├ *D A T O S ----------*\n└────────────┘\n┌────────────┐\n├ Lado a = ' + a + ' cm\n├ Lado b = ' + b + ' cm\n├ Lado c = ' + c + ' cm\n├ Cálculo: Altura de un tríangulo\n├ sabiendo sus 3 lados\n└────────────┘\n┌────────────┐\n├ Formula:\n├ p = Semi perimetro\n├ p = ( a + b + c ) / 2\n├ p = ( ' + a + ' + ' + b + ' + ' + c + ' ) / 2\n├ p = (' + suma + ') / 2\n├ p = ' + semiP + '\n└────────────┘\n├ S = √p (p - a) (p - b) (p - c)\n├ S = √' + p + ' (' + p + ' - ' + a + ') (' + p + ' - ' + b + ') (' + p + ' - ' + c + ')\n├ S = ' + area + '\n├ Área = ' + area + ' cm2\n└────────────┘\n├ Area = base * altura / 2\n├ Altura = 2 * Área / base\n├ Altura = 2 * ' + area + ' / ' + (numeroMayor = Math.max(a, b, c)) + '\n├ Altura = ' + altura + ' cm\n└────────────┘\n┌────────────┐\n' + msg.body + '\n└────────────┘\n┌────────────┐\n- Euler-Bot©\n└────────────┘\n';
            enviarMedia('./media/imagenCalculadoraAlturaTriangulo.png', mensaje)
        };
        if (['Area', 'area', 'área', 'Área'].includes(clasificacion)) {
        /* --------------- /Calculo Triangulo Area [a=base] [b=altura] -------------- */
            chat.sendStateTyping();
            let area = areaTriangulo(a, b);
            let basePorAltura = baseAltura(a, b);
            let mensaje = `┌────────────┐
├ *D A T O S ----------*
└────────────┘
┌────────────┐
├ *Base* = ${a} cm
├ *Altura* = ${b} cm
├ *Cálculo*: Área de un triangulo
sabiendo su base y altura
└────────────┘
┌────────────┐
├ Fórmula:
├ *Área* = base * altura / 2
├ *Área* = ${a} * ${b} / 2
├ *Área* = ${basePorAltura} / 2
├ *Área* = ${area} cm2
└────────────┘
┌────────────┐
${msg.body}
└────────────┘
┌────────────┐
- *Euler-Bot©*
└────────────┘
`;
            enviarMedia('./media/imagenCalcularAreSabiendoBaseAltura.png', mensaje)
        };
        if (clasificacion === 'Hipotenusa' || clasificacion === 'hipotenusa') {
            let hipotenusa = calcularHipotenusa(a, b);
            let mensaje = `┌────────────┐
├ *D A T O S ----------*
└────────────┘
┌────────────┐
├ *Cateto 1* = ${a}
├ *Cateto 2* = ${b}
├ *Cálculo*: 
├ *Hipotenusa*
└────────────┘
┌────────────┐
├ Fórmula:
├ C^2 = a^2 + b^2
├ C = √a^2 + b^2
├ C = √${a **= 2} + ${b **= 2}
├ C = ${hipotenusa}
└────────────┘
┌────────────┐
${msg.body}
└────────────┘
┌────────────┐
- *Euler-Bot©*
└────────────┘
`;
            enviarMedia('./media/imagenCalculadoraHipotenusa.png', mensaje)
        };
        if (clasificacion === 'Cateto' || clasificacion === 'cateto') {
            let cateto = calcularCateto(a, b);
            let mensaje = `┌────────────┐
├ *D A T O S ----------*
└────────────┘
┌─┬─┬────┐
 │┼│ │┼┼┼┼ │
 │┼│ │┼┼┼┼ │
└─┴─┴────┘
┌────────────┐
├ *Cateto* = ${Math.min(a, b)}
├ *Hipotenusa* = ${Math.max(a, b)}
├ *Cálculo*: 
├ *Obtener cateto*
└────────────┘
┌────────────┐
├ Fórmula:
├ C^2 = a^2 + b^2
├ C^2 - b^2 = a^2
├ ${Math.max(a, b)}^2 - ${Math.min(a, b)}^2 = a^2
├ a = ${cateto}
└────────────┘
┌────────────┐
${msg.body}
└────────────┘
┌────────────┐
- *Euler-Bot©*
└────────────┘
`;
            enviarMedia('./media/imagenCalcularCateto.png', mensaje)
        }
    }
    else if (figura === 'Fisica'){
        if (clasificacion === 'Velocidad') {
            let velocidad = calcularVelocidad(a1, c1);
            let velocidadKM = calcularVelocidadKM(a1, c1)
            let mensaje = 
`┌────────────┐
├ *D A T O S ----------*
└────────────┘
┌────────────┐
├ *Distancia* = ${a1} ${b1}
├ *Tiempo* = ${c1} ${d1}
├ *Cálculo*: 
├ *Velocidad física*
└────────────┘
┌────────────┐
├ Fórmula:
├ Velocidad = distancia / tiempo
├ V = ${a1} / ${c1} 
├ V = ${velocidad} ${b1} / ${d1}
├ V = ${velocidadKM} km/h
└────────────┘
┌────────────┐
${msg.body}
└────────────┘
┌────────────┐
- *Euler-Bot©*
└────────────┘`;
            enviarMedia('./media/imagenCalcularVelocidad.png', mensaje)
        }
    }
}














//  ┌──────────────────────────────────────────────────────────────────────────────┐
switch(msg.body){
//  └──────────────────────────────────────────────────────────────────────────────┘
    case 'Muni-Bot':
        client.sendMessage(message.from, `Hola: ${message.author}, ${message.id}, ${message.orderId}, ${message.rawData}, ${message.to}, ${message.timestamp}, ${message.token}`);
        break;
    case 'ola':
        client.sendMessage(message.from, botMenu);
        break;
    case 'msg':
        client.sendMessage(message.from, msg)
        console.log(msg)
        break;
    case 'Opciones':
        client.sendMessage(message.from, listaOpciones);
        break;
    case 'Preguntas':
        client.sendMessage(message.from, preguntasTexto);
        break;
    case 'Sugerencias':
        client.sendMessage(message.from, sugerenciasTexto);
        break;
    case '¿Quiénes somos?':
        enviarMedia(quienesSomos.ubicacion, quienesSomos.texto)
        break;
    case 'Redes sociales':
        enviarMedia(instagram.ubicacion, instagram.texto)
        enviarMedia(facebook.ubicacion, facebook.texto)
        enviarMedia(paginaWeb.ubicacion, paginaWeb.texto)
        break;
    case 'Plan evolutivo':
        enviarMedia(planEvolutivo.ubicacion)
        break;
    
    case 'Chiste':
        case 'Cuenta un chiste, Riveri-Bot!':
        msg.reply(chistesFuncion.funcion)
        break;
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
* │ Funciones del Bot                                                       │
  └─────────────────────────────────────────────────────────────────────────┘
 */
    case 'Funciones del bot':
        client.sendMessage(message.from, listaFunciones);
        break;
    case 'Calculadora de IMC':
        enviarMedia(calcularIMC.ubicacion, calcularIMC.texto)
        break;
    case 'Fotos de perritos':
        var data;
        fetch('https://random.dog/woof.json', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            api = json.url
            setTimeout(async () => {
                const media = await MessageMedia.fromUrl(api);
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
        });
        break;
    case 'Fotos de patitos':
        var data;
        fetch('https://random-d.uk/api/random', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            api = json.url
            setTimeout(async () => {
                const media = await MessageMedia.fromUrl(api);
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
        });
        break;
    case 'Fotos de zorritos':
        var data;
        fetch('https://randomfox.ca/floof/', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            api = json.image
            setTimeout(async () => {
                const media = await MessageMedia.fromUrl(api);
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
        });
        break;
}

if (ignoreCase.includes(msg.body, 'Hola')) {
    client.sendMessage(msg.from, listaSaludo2);
}

if (msg.body.startsWith('EnviarOpciones ')) {
    // Direct send a new message to specific id
    var number = msg.body.split(' ')[1];
    var messageIndex = msg.body.indexOf(number) + number.length;
    // Index es la cantidad de caracteres que tiene el string,
    /*
    en msg.body.indexOf(number) quiere decir desde el inicio del mensaje
    hasta el límite que es number, aquí se cuentan los espacios y luego
    se suma con la catidad de carácteres de number
    /** */
    var message = msg.body.slice(messageIndex, msg.body.length);
    /*
    Aquí slice es como decir salgo, desde slice(inicio, final) y todo 
    en caracteres, por eso dice lenght, ya que cuenta los carácteres
    del string
    /** */
    number = number.includes('@c.us') ? number : `${number}@c.us`;
    /**
    .includes quiere decir si hay algo dentro de la string, de forma
    que si existe, (condición) ? valor1:valor2. Y si no tiene, se le 
    añade
     */
    var chat = await msg.getChat();
    // Returns the Chat this message was sent in
    chat.sendSeen();
    console.log(message, "  ", msg.body);
    if (message.includes("Opciones")) {
        client.sendMessage(number, listaOpciones);
    }
    if (message.includes("Saludo")) {
        client.sendMessage(number, listaSaludo2)
    }
}
if (msg.body.startsWith('!enviar ')) {
    // Direct send a new message to specific id
    var number = msg.body.split(' ')[1];
    var messageIndex = msg.body.indexOf(number) + number.length;
    // Index es la cantidad de caracteres que tiene el string,
    /*
    en msg.body.indexOf(number) quiere decir desde el inicio del mensaje
    hasta el límite que es number, aquí se cuentan los espacios y luego
    se suma con la catidad de carácteres de number
    /** */
    var message = msg.body.slice(messageIndex, msg.body.length);
    /*
    Aquí slice es como decir salgo, desde slice(inicio, final) y todo 
    en caracteres, por eso dice lenght, ya que cuenta los carácteres
    del string
    /** */
    number = number.includes('@c.us') ? number : `${number}@c.us`;
    /**
    .includes quiere decir si hay algo dentro de la string, de forma
    que si existe, (condición) ? valor1:valor2. Y si no tiene, se le 
    añade
     */
    var chat = await msg.getChat();
    // Returns the Chat this message was sent in
    chat.sendSeen();
    client.sendMessage(number, `[Respuesta Recibida] ${message}`)
}
//  ┌──────────────────────────────────────────────────────────────────────────────┐
if (msg.body.startsWith('/imc ')) {
//  └──────────────────────────────────────────────────────────────────────────────┘
/* 
* ┌─────────────────────────────────────────────────────────────────────────┐
* │                     [1]    [2]   [3]   [4]  [5]                         │
* │               /imc Nombre Edad Altura Peso Sexo                         │
* └─────────────────────────────────────────────────────────────────────────┘
 */
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    let nombre = msg.body.split(' ')[1];
    let edad = msg.body.split(' ')[2];
    let altura = msg.body.split(' ')[3];
    let masa = msg.body.split(' ')[4];
    let sexo = msg.body.split(' ')[5];
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    let clasificaciones = [
        "Peso inferior al normal", // [0]
        "Peso normal", // [1]
        "Peso superior al normal", // [2]
        "Obesidad", // [3]
        "Obesidad mórbida" // [4]
    ];
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    var arreglo = 0;
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    var imc = masa / (altura * altura);
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌──────────────────────────────────────────────────────────────────────────────┐
    if (imc < 18.5) {
        var arreglo = clasificaciones[0]
    } else if (imc >= 18.5 && imc <= 24.9) {
        var arreglo = clasificaciones[1]
    } else if (imc >= 25 && imc <= 29.9) {
        var arreglo = clasificaciones[2]
    } else if (imc > 30) {
        var arreglo = clasificaciones[3]
    }
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    /* ------------------- Formula Peso Minimo Maximo e Ideal ------------------- */
    switch (sexo) {
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
        case 'Masculino':
        case 'masculino':
        case 'Hombre':
        case 'hombre':
        case 'Varon':
        case 'varon':
        case 'Varón':
        case 'varón':
        case 'M':
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            var pesoMaximo = 25 * (altura * altura)
            var pesoMinimo = 20 * (altura * altura)
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            /* ---------------------- Formula Peso Ideal (Lorentz) ---------------------- */
            let alturaCM = altura * 100;
            var pesoIdealMasculino = alturaCM - 100 - [(alturaCM - 150) / 4];
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath("./media/foto_calculadora.jpg");
                client.sendMessage(message.from, media, {
                    caption: `
┌————————————
- Calculadora de IMC 👩‍⚕️🍎
└————————————
┌————————————
├ IMC es el índice de masa corporal 
⌠del cuerpo humano. Este es el resul-
⌠tado de dividir el peso en kilogramos
⌠(kg) entre el cuadrado de la estatura 
⌠sen metros (m²).
└————————————
├ *Nombre*: ${nombre}
├ *Sexo*: ${sexo}
├ *Edad*: ${edad}
├ *Altura* (m): ${altura}
├ *Peso* (kg): ${masa}
├ *IMC*: ${imc} 
├ *Clasificación*: ${arreglo}
└————————————
├ *Peso minimo* (kg): ${pesoMinimo}
├ *Peso máximo* (kg): ${pesoMaximo}
├ *Peso ideal* (kg): ${pesoIdealMasculino}
└————————————
Para más información:
https://cuidateplus.marca.com/alimentacion/diccionario/indice-masa-corporal-imc.html
`
                });
            }, DELAY_TIME);
            break;
//  └──────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
        case 'Femenino':
        case 'femenino':
        case 'F':
        case 'Mujer':
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            let pesoMinimo1 = 24 * (altura * altura);
            let pesoMaximo1 = 19 * (altura * altura);
            let alturaCM1 = altura * 100 ; 
            var pesoIdealMasculino1 = alturaCM1 - 100 - [(alturaCM1 - 150) / 4];
            
//  └───────────────────────────────────────────────────────────────────────────────────┘
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath("./media/foto_calculadora.jpg");
                client.sendMessage(message.from, media, {
                    caption: `
┌————————————
- Calculadora de IMC 👩‍⚕️🍎
└————————————
┌————————————
├ IMC es el índice de masa corporal 
⌠del cuerpo humano. Este es el resul-
⌠tado de dividir el peso en kilogramos
⌠(kg) entre el cuadrado de la estatura 
⌠sen metros (m²).
└————————————
├ *Nombre*: ${nombre}
├ *Sexo*: ${sexo}
├ *Edad*: ${edad}
├ *Altura* (m): ${altura}
├ *Peso* (kg): ${masa}
├ *IMC*: ${imc} 
├ *Clasificación*: ${arreglo}
└————————————
├ *Peso minimo* (kg): ${pesoMinimo1}
├ *Peso máximo* (kg): ${pesoMaximo1}
├ *Peso ideal* (kg): ${pesoIdealMasculino1}
└————————————
Para más información:
https://cuidateplus.marca.com/alimentacion/diccionario/indice-masa-corporal-imc.html
`
                });
            }, DELAY_TIME);
            break;
    }
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    client.sendMessage(message.from, listaOpciones)}
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (msg.body === '!ping reply') {msg.reply('pong')};
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (msg.body.startsWith('/ACT ')) {
//  └───────────────────────────────────────────────────────────────────────────────────┘

/* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
* │                           Esquema de comandos                               │
* │                             [1]         [2]                                 │
* │                       /ACT Peso(kg) Clasificacion                           │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el peso al elemento [1] dentro del comando mensaje :::::::::::::::::::::│
    let masa = msg.body.split(' ')[1];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el rango de Edad al elemento [2] dentro del comando mensaje ::::::::::::│
    let rangoDeEdad = msg.body.split(' ')[2]
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define los datos para cada rango de edad ::::::::::::.:::::::::::: ::::::::::::│
    let clasificaciones = [// ──────────────────────────────────────────────────────────│
        0.6, // Hombres ────────────────────────────────────────────────────────────────│
        0.5, // Ancianos, Mújeres ──────────────────────────────────────────────────────│
        0.45] // Anciana ───────────────────────────────────────────────────────────────│
//  └───────────────────────────────────────────────────────────────────────────────────┘

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Activar función donde se clasifica el rango de edad ::::::::::::::::.:::│
  └─────────────────────────────────────────────────────────────────────────┘
 */
switch(rangoDeEdad){
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    case "Hombre":
        let ACT = clasificaciones[0] * masa;
        enviarMedia('./media/descargar1.png', `
┌————————————
- Calculadora de 
ACT 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${masa}
├ Clasificación = ${rangoDeEdad}
└————————————
├ *Cálculo:*
├ ACT = ${clasificaciones[0]} * ${masa}
└————————————
├ *Resultado:* ${ACT}  lt
├ Es la formula de Watson para el cálculo de Agua Corporal Total (ACT)
└————————————
        `)
    break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    case "Mujer":
    case "AdultoMayor":
        let ACT1 = clasificaciones[1] * masa;
        enviarMedia('./media/descargar1.png', `
┌————————————
- Calculadora de 
ACT 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${masa}
├ Clasificación = ${rangoDeEdad}
└————————————
├ *Cálculo:*
├ ACT = ${clasificaciones[1]} * ${masa}
└————————————
├ *Resultado:* ${ACT1}  lt
├ Es la formula de Watson para el cálculo de Agua Corporal Total (ACT)

└————————————
        `)
    break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    case "Anciana":
        let ACT2 = clasificaciones[2] * masa;
        enviarMedia('./media/descargar1.png', `
┌————————————
- Calculadora de 
ACT 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${masa}
├ Clasificación = ${rangoDeEdad}
└————————————
├ *Cálculo:*
├ ACT = ${clasificaciones[2]} * ${masa}
└————————————
├ *Resultado:* ${ACT2}  lt
└————————————
        `)
    break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    default: 
        let ACT3 = clasificaciones[0] * masa;
        msg.reply("[Fórmula realizada con éxito] su agua corporal total en su cuerpo es de: " + ACT3)
    }}
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (msg.body.startsWith('/DeficitDeAgua ')) {
//  └───────────────────────────────────────────────────────────────────────────────────┘
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
* │                           Esquema de comandos                           │
* │                      [0]         [1]         [2]                        │
* │                    /DeficitDeAgua ATC_actual Na_actual                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el ATC_actual al elemento [1] dentro del comando mensaje :::::::::::::::│
    let ATC_actual = msg.body.split(' ')[1];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el Na_actual al elemento [2] dentro del comando mensaje ::::::::::::::::│
    let Na_actual = msg.body.split(' ')[2];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Función de cálculo :::::::::::::::::::::::::::::::::::::::::::::: ::::::::::::::::│
    let DeficitDeAgua = ATC_actual * ( (140 / Na_actual) - 1);
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
    if (0 > DeficitDeAgua) {
        enviarMedia('./media/descargar.png', `
┌————————————
- Calculadora de 
Déficit de Agua 👩‍⚕️🍎
└————————————
├ *Datos:*
├ ACT actual = ${ATC_actual}
├ Na actual  = ${Na_actual}
└————————————
├ *Cálculo:*
├ Déficit de agua = DFC 
├ DFC = ${ATC_actual} * ( (140 / ${Na_actual}) - 1 )
└————————————
├ *Resultado:* ${DeficitDeAgua} (kg)
├ *Conclusión:* Presenta superávit hídrico.
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
        `)
    } 
    else if (0 < DeficitDeAgua) {
        enviarMedia('./media/descargar.png', `
┌————————————
- Calculadora de 
Déficit de Agua 👩‍⚕️🍎
└————————————
├ *Datos:*
├ ACT actual = ${ATC_actual}
├ Na actual  = ${Na_actual}
└————————————
├ *Cálculo:*
├ Déficit de agua = DFC 
├ DFC = ${ATC_actual} * ( (140 / ${Na_actual}) - 1 )
└————————————
├ *Resultado:* ${DeficitDeAgua} (kg)
├ *Conclusión:* Presenta déficit hídrico.
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
        `)}}
/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ ANCHOR Calculo Renal     :::::: : :  :   :    :     :        :   :      │
└─────────────────────────────────────────────────────────────────────────┘
 */
        if (msg.body.startsWith('/CalculoRenal ')) {
/*
* ┌─────────────────────────────────────────────────────────────────────────┐
* │          [0]          [1]            [3]      [4]    [5]                │
* │     /CalculoRenal Peso(kg) creatinina_en_plasma_mg edad sexo            │
* └─────────────────────────────────────────────────────────────────────────┘
*/
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el peso al elemento [1] dentro del comando mensaje :::::::::::::::::::::│
    let peso = msg.body.split(' ')[1];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define la creatinina en plasma en mg/db al elemento [1] dentro del comando mensaje │
    let creatinina_en_plasma_mg_dl = msg.body.split(' ')[2];
//  └───────────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define la edad al elemento [1] dentro del comando mensaje :::::::::::::::::::::│
    let edad = msg.body.split(' ')[3];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Se define el sexo al elemento [1] dentro del comando mensaje :::::::::::::::::::::│
    let sexo = msg.body.split(' ')[4];
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Clasificaciones de estado renal :::::::::::::::::::::::::::: :::::::::::::::::::::│
        let clasificaciones = [
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────────┐
    /* [0] */ "Hay un daño renal pero el filtrado glomerular es normal.", //────────────────│
    /* [1] */ "Hay un daño renal y el filtrado glomerular es afectado levemente.", //───────│
    /* [2] */ "Hay un daño renal y el filtrado glomerular es moderadamente disminuido.",//──│
    /* [3] */ "Hay un daño renal y el filtrado renal esta severamente disminuido.", //──────│
    /* [4] */ "El resultado menor a 15: Hay un fallo renal."//──────────────────────────────│
//  └───────────────────────────────────────────────────────────────────────────────────────┘
            ];
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ Clasificaciones de estado renal :::::::::::::::::::::::::::: :::::::::::::::::::::│
        let clasificaciones1 = [
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌────────────────────────────┐
    /* [0] */ "Estado I", //─────│
    /* [1] */ "Estado II", //────│
    /* [2] */ "Estado III", //───│
    /* [3] */ "Estado IV", //────│
    /* [4] */ "Estado V" //──────│
//  └────────────────────────────┘
            ];
/* -------------------------------------------------------------------------- */
/*┌──────────────────────────────────────────────────────────────────────────────┐
* │ Arreglo será declarado con la variable clasificaciones - Significado         │
* │ Arreglo1 será declarado con la variable clasificaciones1 - Estado Renal      │
* │ Se le atribuye mediante un corchete [n]                                      │
* │ N es igual al número de posición de la string que buscamos llamar            │
* │ Pudiendo ser [0] [1] [2] [3] [4]                                             │
* └──────────────────────────────────────────────────────────────────────────────┘
*/                                                                             
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            var arreglo = 0; 
            var arreglo1 = 0;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            let CalculoRenalMasculino = ( (140 - edad) * peso ) / ( 72 * creatinina_en_plasma_mg_dl);
            if (CalculoRenalMasculino >= 90) {
                    var arreglo = clasificaciones[0];
                    var arreglo1 = clasificaciones1[0]
            } else if (60 <= CalculoRenalMasculino <= 89) {
                    var arreglo = clasificaciones[1];
                    var arreglo1 = clasificaciones1[1]
            } else if (30 <= CalculoRenalMasculino <= 59) {
                    var arreglo = clasificaciones[2];
                    var arreglo1 = clasificaciones1[2]
            } else if (15 <= CalculoRenalMasculino <= 29) {
                    var arreglo = clasificaciones[3];
                    var arreglo1 = clasificaciones1[3]
            } else if (CalculoRenalMasculino <= 14) {
                    var arreglo = clasificaciones[4];
                    var arreglo1 = clasificaciones1[4]
            }
//  └───────────────────────────────────────────────────────────────────────────────────┘
/*┌──────────────────────────────────────────────────────────────────────────────┐
* │ Arreglo será declarado con la variable clasificaciones - Significado         │
* │ Arreglo1 será declarado con la variable clasificaciones1 - Estado Renal      │
* │ Se le atribuye mediante un corchete [n]                                      │
* │ N es igual al número de posición de la string que buscamos llamar            │
* │ Pudiendo ser [0] [1] [2] [3] [4]                                             │
* │ La diferencia del anterior es que en esta fórmula se calcula para mujeres    │
* └──────────────────────────────────────────────────────────────────────────────┘
*/                           
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            var arreglo2 = 0;
            var arreglo3 = 0;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            let CalculoRenalFemenino = ( (140 - edad) * peso ) / ( 72 * creatinina_en_plasma_mg_dl) * 0.85;
            if (CalculoRenalFemenino >= 90) {
                    var arreglo2 = clasificaciones[0];
                    var arreglo3 = clasificaciones1[0]
            } else if (60 <= CalculoRenalFemenino <= 89) {
                    var arreglo2 = clasificaciones[1];
                    var arreglo3 = clasificaciones1[1]
            } else if (30 <= CalculoRenalFemenino <= 59) {
                    var arreglo2 = clasificaciones[2];
                    var arreglo3 = clasificaciones1[2]
            } else if (15 <= CalculoRenalFemenino <= 29) {
                    var arreglo2 = clasificaciones[3];
                    var arreglo3 = clasificaciones1[3]
            } else if (CalculoRenalFemenino <= 14) {
                    var arreglo2 = clasificaciones[4];
                    var arreglo3 = clasificaciones1[4]
            }
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            switch(sexo){
                case 'Masculino':
                    case 'masculino':
                        case 'hombre':
                            case 'Hombre':
                                case 'Varón':
                                    case 'varon':
                                        case 'Varon':
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
                    enviarMedia(calculoRenal.ubicación, `
┌————————————
- Calculadora de 
Función Renal 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${peso}
├ Creatinina en plasma mg/db = ${creatinina_en_plasma_mg_dl}
├ Edad = ${edad}
├ Sexo = ${sexo}
└————————————
├ *Cálculo:*
├ CCr = ( 140 - ${edad} ) * ${peso} kg / 72 * ${creatinina_en_plasma_mg_dl} mg/db * 0.85
└————————————
├ *Resultado:* ${CalculoRenalMasculino}  
├ *Estado*: ${arreglo1}
├ *Clasificación*: ${arreglo}
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
        `)
                break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
                case 'Femenino':
                    case 'Mujer':
                        case 'mujer':
                            case 'femenino':
                                case 'Hembra':
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
                enviarMedia(calculoRenal.ubicación, `
┌————————————
- Calculadora de 
Función Renal 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${peso}
├ Creatinina en plasma mg/db = ${creatinina_en_plasma_mg_dl}
├ Edad = ${edad}
├ Sexo = ${sexo}
└————————————
├ *Cálculo:*
├ CCr = ( 140 - ${edad} ) * ${peso} kg / 72 * ${creatinina_en_plasma_mg_dl} mg/db * 0.85
└————————————
├ *Resultado:* ${CalculoRenalFemenino} 
├ *Estado*: ${arreglo2}
├ *Clasificación*: ${arreglo3}
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
        `)
                break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            default: 
                enviarMedia(calculoRenal.ubicación, `
┌————————————
- Calculadora de 
Función Renal 👩‍⚕️🍎
└————————————
├ *Datos:*
├ Peso(kg) = ${peso}
├ Creatinina en plasma mg/db = ${creatinina_en_plasma_mg_dl}
├ Edad = ${edad}
├ Sexo = ${sexo}
└————————————
├ *Cálculo:*
├ CCr = ( 140 - ${edad} ) * ${peso} kg / 72 * ${creatinina_en_plasma_mg_dl} mg/db * 0.85
└————————————
├ *Resultado:* ${CalculoRenalMasculino} 
├ *Estado*: ${arreglo1}
├ *Clasificación*: ${arreglo}
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
        `)
            break;
//  └───────────────────────────────────────────────────────────────────────────────────┘
            }} //fin del if :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
            if (msg.body.startsWith('/DeficitDeHierro ')) {
//  └───────────────────────────────────────────────────────────────────────────────────┘
/* 
* ┌─────────────────────────────────────────────────────────────────────────────┐
* │                           Esquema del comando                               │
* │                      [0]         [1]      [2]     [3]                       │
* │               /DeficitDeHierro Peso(kg) Hb_real Hb_diana                    │
* └─────────────────────────────────────────────────────────────────────────────┘
*/
            let peso = msg.body.split(' ')[1];
            let Hb_real = msg.body.split(' ')[2];
            let Hb_diana = msg.body.split(' ')[3];
// ────────────────────────────────────────────────────────────────────────────────
/* --------------------------------- Fórmula -------------------------------- */
            let DeficitDeHierro = peso * ( Hb_real - Hb_diana  ) * 2.4 + 500;
// ────────────────────────────────────────────────────────────────────────────────
/* -------------------------------- Resultado ------------------------------- */
            enviarMedia(deficitDeHierro.ubicacion, `
┌————————————
- Calculadora 
Déficit de hierro
 👩‍⚕️🍎
└————————————
├ *Fórmula*: 
Déficit de hierro (mg) = ${peso} * ( ${Hb_diana} - ${Hb_real} ) * 2.4 + 500
└————————————
├ *Resultados:* ${DeficitDeHierro} (mg)
├ # Estos datos son apróximados, 
├ es mejor consultar un especialista.
└————————————
`)



            }
    })
