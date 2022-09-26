/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Cliente WhatsApp-webjs                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const {Client, LocalAuth, MessageMedia, List, Buttons, ChatTypes, Status} = require("whatsapp-web.js");
const client = new Client({authStrategy: new LocalAuth(), 	puppeteer:{args: ['--no-sandbox']}});
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Importaciones                                                           │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const qrcode = require("qrcode-terminal");
const ignoreCase = require('ignore-case');
const {
  listaSaludo2,
  listaOpciones,
  listaFunciones,
  listaBots,
/* ---------------------------------- Texto --------------------------------- */
  preguntasTexto,
  sugerenciasTexto,
  quienesSomosTexto,
  instagramTexto,
  facebookTexto,
  paginaWebTexto,
  chistes,
  textos,
/* ------------------------------- Ubicaciones ------------------------------ */
  ubicacionQuienesSomos,
  ubicacionInstagram,
  ubicacacionFacebook,
  ubicacionPaginaWeb,
/* ---------------------------------- Boton --------------------------------- */
  botMenu,
  saludoNuevoBoton,
  botonIntroduccion,
  botonProblema1,
  botonProblema2,
  botonP2ComoUsar,
  botonP2Comandos,
  botonProblema3,
  botonP3ComoUsar,
  botonP3Comandos,
  botonEulerBot,
  botonMediBot,
  botonCiudadania,
  botonComandosCiudi,
/* -------------------------------- Especial -------------------------------- */
  instagram,
  facebook,
  paginaWeb,
  quienesSomos,
  calculoRenal,
  deficitDeHierro,
  calcularIMC,
  planEvolutivo,
  chistesFuncion,
  botones,
/* -------------------------------- Funciones ------------------------------- */
  calcularAreaCirculo,
  calcularAreaCirculoSinPi,
  calcularPerimetro,
  calcularPerimetroSinPi,
  radioCuadrado,
  areaTriangulo,
  baseAltura,
  sumaDeLados,
  leyHeron,
  calcularAlturaTriangulo,
  calcularHipotenusa,
  calcularCateto,
  semiPerimetro,
  calcularVelocidadKM,
  calcularVelocidad,
  
} = require("./src/headers");
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Definiciones                                                            │
  └─────────────────────────────────────────────────────────────────────────┘
 */
  const DELAY_TIME = 500; //ms
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Ejecución del cliente                                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */
client.on('authenticated', () => {
    console.log("Conectado correcto");
});
client.on('auth_failure', () => {
    console.log("Conectado incorrecto");
})
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
})
client.on('ready', () => {
    console.log("Encendido correcto");
})
client.initialize();
/* 
//  ┌─────────────────────────────────────────────────────────────────────────┐
//  │ Funciones                                                               │
//  └─────────────────────────────────────────────────────────────────────────┘
 */
client.on('message', async (message) => {
//  ┌─────────────────────────────────────────────────────────────────────────┐
  function enviarMedia(ubicacionDelArchivo, captionMensaje) {
    setTimeout(async () => {
        const media = await MessageMedia.fromFilePath(ubicacionDelArchivo);
        client.sendMessage(message.from, media, {
            caption: captionMensaje
        });
    }, DELAY_TIME)};
//  └─────────────────────────────────────────────────────────────────────────┘
//  ┌─────────────────────────────────────────────────────────────────────────┐
  function enviarMensaje(mensaje){
      client.sendMessage(msg.from, mensaje)
  }
//  └─────────────────────────────────────────────────────────────────────────┘
//  ┌─────────────────────────────────────────────────────────────────────────┐
  async function enviarAudio(ubicacionDelArchivo){
      let audio = MessageMedia.fromFilePath(ubicacionDelArchivo);
      await client.sendMessage(msg.from, audio, {sendAudioAsVoice: true});
  }
//  └─────────────────────────────────────────────────────────────────────────┘
//  ┌─────────────────────────────────────────────────────────────────────────┐
    let msg = message;
    let mb = message.body;
//  └─────────────────────────────────────────────────────────────────────────┘
if (ignoreCase.includes(mb, 'Hola')){
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
else if (['hemorragia', '/hemorragia', 'Hemorragia', '/Hemorragia '].includes(msg.body)){
    enviarMensaje(textos.textoHemorragia)
}
else if (['Medi-Bot', 'medi-bot'].includes(message.body)) {
    enviarMedia(botones.ubicacionProblema2)
    enviarAudio('./media/medi-bot.mp3')
    client.sendMessage(message.from, botonMediBot)
}
else if (['Riveri-Bot', 'Riveri-bot'].includes(message.body)){
    client.sendMessage(message.from, botMenu);
}
/* ------------------------ Funciones para Euler-Bot ------------------------ */
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
  let resultado = [];
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
  else   if (['Geometría', 'Geometria', 'geometria', 'G'].includes(figura)){

    if(['Volumen'].includes(clasificacion)){

      if(['Cubo', 'cubo'].includes(a)){
        //                          [0]    [1]     [2]    [4]  [5]
        //                       [figura] [clf]    [a]     [b]  [c]
        /* ------------------ /Calcular Geometría Volumen Cubo Lado ----------------- */
        resultado = c **= 3;
        enviarMedia('./media/imagenCalculadoraVolumenCubo.png', `┌────────────┐
├ *D A T O S ----------*
└────────────┘
┌────────────┐
├ *Lado* = ${c}
├ *Obtener volumen*
└────────────┘
┌────────────┐
├ Fórmula:
├ V = L * L * L
├ V = ${c} * ${c} * ${c} 
├ V = ${resultado}
└────────────┘
┌────────────┐
- *Euler-Bot©*
└────────────┘
`)
      }
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
})