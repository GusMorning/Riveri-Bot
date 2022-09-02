var colors = require("colors");
console.log("[+] Prueba: " + "realizada con éxito".green.italic);
const {
    Client,
    LegacySessionAuth,
    LocalAuth,
    MessageMedia,
    List,
    Buttons,
    ChatTypes,
    Status,
    Order
} = require("whatsapp-web.js");
const DELAY_TIME = 500; //ms
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false
    }
});
const ProgressBar = require('progress');
const fs = require("fs");
/* -------------------------------- Funciones ------------------------------- */
function leerText(ubicacionDelArchivo){
    fs.readFile(ubicacionDelArchivo, 'utf-8', (err, data) => {
        if (err) {
            console.log("Algo pasó")
        }
        var data1 = data
        console.log(data1);
        return data1;
    });
}

/* -------------------------------------------------------------------------- */
//  ┌──────────────────────────────────────────────────────────────────────────────┐
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var dia = fechaHora.toDateString();
var diasSemanales = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo")
function mensajeDeActivacion(StatusBot, Horas, Minutos, Dia, Fecha) {
    this.StatusBot = StatusBot
    this.Horas = Horas
    this.Minutos = Minutos
    this.Dia = Dia
    this.Fecha = Fecha
}
var familia = {};
console.log("[+] Prueba: Importaciones y declaraciones " + "realizada con éxito!".green.italic);
familia.prueba1 = new mensajeDeActivacion("Encendido", horas, minutos, diasSemanales[fechaHora.getDay()], fechaHora.toLocaleDateString());
//  └──────────────────────────────────────────────────────────────────────────────┘
/* ------------------------- SECTION Texto Menu ------------------------- */
var preguntasTexto = `¡Fantástico! Cuéntame, ¿Cuál es tu pregunta? En lo posible un humano podrá atenderte y ayudarte. Una vez termines puedes volver a ver las alternativas 🥳🎉🎊`;
var sugerenciasTexto = `Wow! me encantan las sugerencias. Por favor, cuéntame más 🎓🤸‍♀️`;
var quienesSomosTexto = 'Una gran pregunta, en efecto. Nosotros somos _*"El Partido Unido Estudiantil"*_, el Municipio Escolar, un grupo de estudiantes que fuimos incentivados por querer ser cada día mejor, y querer apoyar a nuestro Colegio: I.E "Nicanor Rivera Cáceres" 7050. Y permitir adaptar los diferentes conocimientos e ideas de forma progresiva de acuerdo a la nuevas tecnologías. Creemos en que todos pueden sumarse, por eso. Si te interesa unirte y formar parte de nosotros. Eres muy bienvenido';
var instagramTexto = '[+] Nuestro Instagram del Colegio';
var facebookTexto = "[+] Facebook de nuestra Institución";
var paginaWebTexto = '[+] *Página Web:* https://muniestudiantil.blogspot.com/ Aquí encontrarás una variedad de publicaciones para conocer más sobre nuestro Municipio y campañas';
var imcTexto = '*¿Cómo calcular tu IMC?* \nTienes que rellenar tus datos con la siguiente fórmula: /imc Nombre Edad Altura(EnMetros) Peso Sexo\nSeguir de ejemplo la imagen';
var calculoRenalTexto = "";
var tittleFuncionesMenu = '¡Perfecto! 🍃';
var cuerpoFuncionesMenu = 'Adentro encontrarás funciones especiales que nuestro bot ofrece a ustedes!';
var botonFuncionesMenu = 'Presioname 🥳';
var tituloDentroFuncionesMenu = 'Pruebalas, son geniales!';
const chistes = [
    "¿Cuál es el pez más desagradable? El pezuña",
    "- Era un niño tan feo, pero tan feo, que cuando la madre dio a luz, el médico en vez de felicitarla la regañó",
    "- Tómense una foto sin flash... Y el pobre de Flash se fue sin su foto.",
    "- Dicen que fumar es malo... ¡Y lo metieron a la cárcel! ",
    "- Le dice un encendedor a un fósforo: ¿Por qué cada vez que te frotan pierdes la cabeza? El fósforo responde: Suelta la piedra, y pelea como los hombres.",
    "¿Cómo llamarías a un perro sin patas? Da igual como lo llames, no va a venir.",
    "Cuando muera, quiero irme en paz como hizo mi abuelo, durante la siesta – y no gritando como el resto de pasajeros que iban en su coche.",
    "Tras doce años de terapia mi siquiatra dijo algo que hizo brotar las lágrimas en mis ojos. Dijo: “I don’t speak Spanish”.",
    "Cuando me raptaron mi padres entraron en acción: pusieron mi habitación en alquiler.",
    "Creo que hacer pruebas con animales es horrible, se ponen nerviosos y dan las respuestas equivocadas.",
    "Lo intentaste con todas tus fuerzas y fracasaste, La lección es: ‘nunca lo intentes’. -Homer Simpson",
    "Le dije a mi doctor que me había roto la pierna en dos sitios y me dijo que me alejara de esos lugares. – Henny Youngman",
    "Todo el mundo tiene memoria fotográfica, solo que algunos andan sin película.",
    "Errar es humano, pero echarle la culpa al otro es más humano todavía. ",
    "La pereza es la madre de todos los vicios, y como a la madre hay que respetarla... ",
    "Nada en vano, todo en vino.",
    "Si un pajarito te dice que estás loco, debes estarlo pues los pájaros no hablan. ",
    "No te tomes la vida en serio, al fin y al cabo no saldrás vivo de ella. ",
    "Mátate estudiando y serás un cadáver culto. "
];
var bodyTextoSaludo = 'Me alegra verte por aquí. Estoy programado para apoyarte en tu vida con mis funciones especiales, ¿Cuáles son? veámos!\n┌————————————\n✅ Introducción: ¿Deseas entender qué soy, cómo usarme y mis funciones? Esta sección será perfecta para ti pues te servirá de guía para que puedas aprovecharme al máximo.\n└————————————\n┌————————————\n👩‍💻 Lista de Bots: Encontrarás todos nuestros bots a tu servicio desde tu teléfono! Encontrarás todos nuestros bots a tu servicio desde tu teléfono!\n└————————————\n';
var tituloTextoSaludo = `┌————————————\n🤖 Hola! Soy NRC-Bot\n└————————————`;
var footerTextoSaludo = `¡Ten un grandioso día!`;
var bodyTextoIntroduccion = '┌————————————\n*Proyecto Framework para la Creación de Bots Multiusos*\n└————————————\n┌————————————\nEs un proyecto científico de alternativa de solución tecnológica, programado y creado por nosotros a fin de combatir las problemáticas que tenemos en nuestra sociedad\n└————————————';
var tituloTextoIntroduccion = '┌————————————\n✅ Introducción\n└————————————'
var footerTextoIntroduccion = 'Presiona los botones para conocer más';
var bodyTextoProblema1 = '┌————————————\n- La escasa enseñanza de programación en los colegios: Es conocido que estamos en una era donde el uso y avance de las tecnologías es indispensable, sin embargo, ¿Estamos avanzando nosotros con ella? La respuesta es que no, porque aprendimos a utilizarlas pero no a crearlas y esto nos afecta a todos, ya que el mundo laboral necesita en demanda mayores conocimientos. Siendo así que los jóvenes al salir del colegio se encuentran una realidad muy diferente a la que se les enseña. \n└————————————\n¿La solución? Framework para la creación de Bots ✅\n┌————————————\nUna framework es una herramienta que ofrece una estructura base para elaborar un proyecto con objetivos específicos, en resumen, la herramienta que te permitirá realizar proyectos de forma más sencilla y con los recursos que necesites para ello. Nuestra Framework nos permite responder a estas preguntas: \n└————————————\n┌————————————\n❌ ¿No sabes programar?\n✅ La Framework te enseñará para que puedas aprender desde 0 con ejemplos prácticos de su uso.\n└————————————\n┌————————————\n❌ ¿Es complicado? \n✅ Los materiales serán didácticos y se complementan con videos tutoriales.\n└————————————\n❌ ¿Qué proyectos me ayudará a hacer?\n✅ Podrás crear tu propio Bot para WhatsApp lo que desees hacer.\n└————————————\n┌————————————\n❌ ¿Tengo que pagar? \n✅ Es totalmente gratuita, y está subida en https://github.com/GusMorning/Riveri-Bot\n└————————————';
var tituloTextoProblema1 = '┌————————————\nP R O B L E M A T I C A 1️⃣\n└————————————';
var bodyTextoProblema2 = '┌————————————\n- El personal de salud, doctores o médicos cuando hacen su diagnóstico a los pacientes tienen en cuenta una problemática crucial: El tiempo que les demora realizar las fórmulas como lo es calcular el IMC, déficit de agua, hierro, etc. Que traducido a efectos prácticos, es tiempo no aprovechable. Produciendo así mayor tiempo de demora en el atendimiento de pacientes, y dificultando su ardua labor.\n└————————————\n¿Cómo lo podemos solucionar? \nPresentamos a Medi-Bot ✅\n┌————————————\nPermite calcular el índice de masa corporal (IMC), el déficit del agua en el cuerpo (ACT), la función renal (CCr) (Cockcroft-Gault) y el déficit de hierro mediante la fórmula de Ganzoni, así como también las instrucciones para actuar en caso de una emergencia de salud, por ejemplo: Reanimación Cardio Pulmonar básica (RCP) o la actuación ante accidentes que comprometen la vida como las hemorragias o posibles fracturas, los números de teléfonos de emergencia y los consejos para tener un estilo de vida saludable.\n└————————————\n┌————————————\n❌¿Tarda mucho?\n✅ Hace los cálculos en menos de 2 segundos sin importar la complejidad.\n└————————————\n┌————————————\n❌¿Los cálculos son precisos?\n✅ Exactitud de cálculo al 100%\n└————————————\n┌————————————\n❌¿El Medi-Bot suplantará al doctor?\n✅ Será su asistente personal para ayudarlo, dentro del límite que será solo hacer las operaciones matemáticas que necesite realizar.\n└————————————';
var tituloTextoProblema2 = '┌————————————\nP R O B L E M A T I C A 2️⃣\n└————————————';

const aleatorio = chistes[Math.floor(Math.random() * chistes.length)];
/* -------------------------------- !SECTION -------------------------------- */
class menu {
    ubicacion;
    texto;
    constructor(ubicacion, texto) {
        this.ubicacion = ubicacion;
        this.texto = texto;
    }
};
/* --------------------------- SECTION ubicaciones de archivos -------------------------- */
var ubicacionQuienesSomos = "./media/municipio.png";
var ubicacionPlanEvolutivo = "./media/Plan Evolutivo.pdf"
var ubicacionInstagram = "./media/instagramNRC.jpg";
var ubicacacionFacebook = "./media/facebookNRC.jpg";
var ubicacionPaginaWeb = "./media/screenshot.png";
var ubicacionIMC = './media/screenshot_23.png';
var ubicacionCalculoRenal = "./media/calculo_renal.png";
var ubicacionDeficitDeHierro = "./media/deficit_de_hierro.png";
var ubicacionImagenBotonSaludo = "./media/imagenBotonSaludo.png";
/* -------------------------------- !SECTION -------------------------------- */
var quienesSomos = {
    ubicacion: ubicacionQuienesSomos,
    texto: quienesSomosTexto
}
var instagram = {
    ubicacion: ubicacionInstagram,
    texto: instagramTexto
};
var facebook = {
    ubicacion: ubicacacionFacebook,
    texto: facebookTexto
};
var paginaWeb ={
    ubicacion: ubicacionPaginaWeb,
    texto: paginaWebTexto
};
var calculoRenal = {
    ubicación: ubicacionCalculoRenal,
    texto: calculoRenalTexto
};
var deficitDeHierro = {
    ubicacion: ubicacionDeficitDeHierro
};
var calcularIMC = {
    ubicacion: ubicacionIMC,
    texto: imcTexto
}
var planEvolutivo = {
    ubicacion: ubicacionPlanEvolutivo
}
var chistesFuncion = {
    chiste: chistes,
    funcion: aleatorio
}
var saludoNuevo = {
    ubicacion: ubicacionImagenBotonSaludo
}
var botones = {
    ubicacionSaludo: './media/imagenBotonSaludo.png',
    ubicacionProblema1: './media/imagenBotonProblematica1.png',
    ubicacionProblema2: './media/imagenBotonProblematica2.png'

}
// ────────────────────────────────────────────────────────────────────────────────
const botMenu = new Buttons(
    "Soy *Riveri-Bot*, permiteme ayudarte con tus consultas y preguntas. Cuéntame, ¿En qué te puedo ayudar? (*Presiona el botón de Opciones*)",
    [{body: "Opciones", id: 'test-1'}],
    "¡Hola! 🍃",
    "Riveri-Bot"
);
let saludoNuevoBoton = new Buttons(
    bodyTextoSaludo,
    [{body: '✅ Introducción', id: 'test-1'}, 
    {body: '👩‍💻 Lista de Bots', id: 'test-2'}],
    tituloTextoSaludo,
    footerTextoSaludo);

let botonIntroduccion = new Buttons(
    bodyTextoIntroduccion,
    [{body: 'Problemática 1️⃣', id: 'test-3'}, 
    {body: 'Problemática 2️⃣', id: 'test-4'},
    {body: '🔜 Siguiente'}],
    tituloTextoIntroduccion,
    footerTextoIntroduccion);

let botonProblema1 = new Buttons(
    bodyTextoProblema1,
    [{body: 'Problemática 2️⃣'},
    {body: 'Problematica 3️⃣'},
    {body: '🔜 Siguiente (1)'}],
    tituloTextoProblema1,
    footerTextoIntroduccion);

let botonProblema2 = new Buttons(
    bodyTextoProblema2,
    [{body: 'Problematica 3️⃣'},
    {body: 'Presentación de los Bots 🥳'}],
    tituloTextoProblema2,
    footerTextoIntroduccion
)
//
// ────────────────────────────────────────────────── I ──────────
//   ::::::SECTION M E N U S : :  :   :    :     :        :       :
// ────────────────────────────────────────────────────────────
//

/* ------------------------------ SECTION Saludo ----------------------------- */
var seccionSaludo = [{
    title: "Escoja Opción", //titulo adentro de la lista
    rows: [{
        title: "Opciones"
        //description: "¿Tienes dudas o preguntas? Permiteme ayudarte. ;)",
    }],
}, ];
var listaSaludo2 = new List(
    "Soy *Riveri-Bot*, permiteme ayudarte con tus consultas y preguntas. Cuéntame, ¿En qué te puedo ayudar? (*Presiona el botón de Opciones*)", // body
    "Presioname", // Boton a presionar
    seccionSaludo,
    "¡Hola! 🍃", // tittle
    "Riveri-Bot" // copyright ==?
);
/* ----------------------------- !SECTION Saludo ---------------------------- */


/* -------------------------- SECTION Opciones  ---- ------------------------- */
var seccionesOpciones = [{
    title: "Escoja su opción", //titulo adentro de la lista
    rows: [{
            title: "Preguntas",
            //description: "¿Tienes dudas o preguntas? Permiteme ayudarte. ;)",
        }, // Lista 1
        {
            title: "Sugerencias",
            //id: 'test-4' permite enviar con descripción
        }, // Lista 2
        {
            title: "¿Quiénes somos?",
        }, // Lista 3
        {
            title: "Redes sociales",
        }, // Lista 4
        {
            title: "Plan evolutivo",
        }, // Lista 5
        {
            title: "Funciones del bot",
        }, // Lista 6
    ],
}, ];
var listaOpciones = new List(
    "¡Excelente! A continuación tienes las formas en las que te puedo ayudar, presionando Alternativas podrás observar alguna que desees:", // body
    "Alternativas", // Boton a presionar
    seccionesOpciones,
    "Opciones", // tittle
    "Muni-Bot" // copyright ==?
);
/* -------------------------------------------------------------------------- */

var seccionesFunciones = [{
    title: tituloDentroFuncionesMenu, //titulo adentro de la lista
    rows: [{
            title: "Cuenta un chiste, Riveri-Bot!",
            //description: "¿Tienes dudas o preguntas? Permiteme ayudarte. ;)",
        }, // Lista 1
        {
            title: "Fotos de perritos",
            //description: "Las sugerencias son vitales para poder mejorar siempre.",
        }, // Lista 2
        {
            title: "Fotos de patitos",
            //description: "Nuestra identidad, nos presentamos!",
        }, // Lista 3
        {
            title: "Fotos de zorritos",
            //description: "¿Deseas estar al día de las publicaciones del colegio? Aquí podrás saberlo",
        }, // Lista 4
        {
            title: "Calculadora de IMC",
            //description: "¿Quieres informarte? ¡Genial!",
        }, // Lista 5
    ],
}, ];
var listaFunciones = new List(
    cuerpoFuncionesMenu, // body
    botonFuncionesMenu, // Boton a presionar
    seccionesFunciones,
    tittleFuncionesMenu, // tittle
    "Muni-Bot" // copyright ==?
);
/* ----------------------------- !SECTION Lista ----------------------------- */
/* -------------------------------- Funciones ------------------------------- */







//
// ────────────────────────────────────────────────── I ──────────
//   :::::: !SECTION F I N A L : :  :   :    :     :        :       :
// ────────────────────────────────────────────────────────────
//
module.exports = {
    listaSaludo2,
    listaOpciones,
    listaFunciones,
/* ---------------------------------- Texto --------------------------------- */
    preguntasTexto,
    sugerenciasTexto,
    quienesSomosTexto,
    instagramTexto,
    facebookTexto,
    paginaWebTexto,
    chistes,

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
    saludoNuevo,
    botones
}