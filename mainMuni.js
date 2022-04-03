const qrcode = require("qrcode-terminal");
const {
  Client,
  LegacySessionAuth,
  LocalAuth,
  MessageMedia,
  List,
  Buttons,
  ChatTypes,
  Status
} = require("whatsapp-web.js");
const { connectionReady, connectionLost } = require("./controllers/connection");
const fs = require("fs");
const { send } = require("process");
const { sendMessage } = require("./controllers/send");
const DELAY_TIME = 500; //ms
var colors = require("colors");
// Path where the session data will be stored
const SESSION_FILE_PATH = "./session.json";
const chatsinleer = "./chatssinleer1.json";
// Load the session data if it has been previously saved
let sessionData;
var colors = require('colors');
const { measureMemory } = require("vm");
const fetch = require("node-fetch");
var XMLHttpRequest = require('xhr2');
const { url } = require("inspector");
var xhr = new XMLHttpRequest();

function enviarMedia(ubicacionDelArchivo) {
    setTimeout(async () => {
    const media = await MessageMedia.fromUrl(ubicacionDelArchivo);
    message.reply(media);
    }, DELAY_TIME);
};

//.......................................................................................................................................................
// FUNCION HORAS

exports.getBase64 = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
	const anu = fs.readFileSync('./src/emror.jpg')
	if (!res.ok) return { type: 'image/jpeg', result: anu }
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

//exports.getBase64 = getBase64;
//.......................................................................................................................................................
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();
var dia = fechaHora.toDateString();

var sufijo = ' am';
if(horas > 12) {
horas = horas - 12;
sufijo = ' pm';
}

if(horas < 10) { horas = '0' + horas; }
if(minutos < 10) { minutos = '0' + minutos; }
if(segundos < 10) { segundos = '0' + segundos; }

var diaText = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo")
// ---------------------------------------------------------------------------------------------------------
function Activacion(StatusBot, Horas, Minutos, Dia, Fecha) {
    this.StatusBot = StatusBot
    this.Horas = Horas
    this.Minutos = Minutos
    this.Dia = Dia
    this.Fecha = Fecha
}

var familia = {};

familia.prueba1 = new Activacion("Encendido", horas, minutos, diaText[fechaHora.getDay()], fechaHora.toLocaleDateString())


// ...................................................................................................................................................
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);}


const client = new Client({
    authStrategy: new LegacySessionAuth({
    session: sessionData,
    }),
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});


client.on("ready", () => {
    client.getChats().then((chats) => {
    const notificarEncendido = chats.find((chat) => chat.name === "StatusBot");
    console.log(`
 ┌─────────────────────────────────────────────────────────────────────────────────┐
 │ 888b     d888                      d8b        888888b.    .d88888b. 88888888888 │ 
 │ 8888b   d8888                      Y8P        888  "88b  d88P" "Y88b    888     │  
 │ 88888b.d88888                                 888  .88P  888     888    888     │ 
 │ 888Y88888P888  888  888  88888b.   888        8888888K.  888     888    888     │ 
 │ 888 Y888P 888  888  888  888 "88b  888        888  "Y88b 888     888    888     │ 
 │ 888  Y8P  888  888  888  888  888  888 888888 888    888 888     888    888     │ 
 │ 888   "   888  Y88b 888  888  888  888        888   d88P Y88b. .d88P    888     │ 
 │ 888       888   "Y88888  888  888  888        8888888P"   "Y88888P"     888     │
 └─────────────────────────────────────────────────────────────────────────────────┘   
      `.bold.cyan);
    client.sendMessage(
        notificarEncendido.id._serialized,
        `Bot encendido: \n [Hora: '${horas} am'] \n [Minutos: '${minutos}'] \n [Día: '${diaText[fechaHora.getDay()]}'] \n [Fecha: '${fechaHora.toLocaleDateString()}']
        `
    );
    console.table(familia);
    });
});

client.on("authenticated", (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
    if (err) {
        console.error(err);
    }
    });
});

client.initialize();

// _____________________________________________________________________________________________________________________________----
// client.on("message", async (message) => {
    //   console.log(`Mensaje recibido de`.cyan, `${message.from}:`, `${message.body}`);

client.on("message", async (message) => {
    console.log(`Mensaje recibido de`.cyan, `${message.from}:`, `${message.body}`);
    //client.getChats().then((chats) => {
    //    
    //    const GustavBot = chats.find((chat) => chat.name === 'Gustav-Bot');
    //    client.sendMessage(GustavBot.id._serialized, `[Mensaje]: ${message.from}: [Body]: ${message.body} [Tiempo]: ${horas} : ${minutos}`)
    //});
    let msg = message

    if (msg.body === '!ping reply') {
        msg.reply('pong');
    }

    else if (msg.body.startsWith('/personaje ')) {
        let apiURL = [];
        var push1 = msg.body.split(' ')[1];
        var push2 = msg.body.split(' ')[2];
        if (typeof push2 === 'undefined'){
            var push3 = push1
        } else {
            var push3 = `${push1} ${push2}`
        }
        // [6] undefined
        // [0] /personaje
        // [1] Darth
        // [1,2] Darth Maul
        var data;
        fetch(`https://swapi.dev/api/people/?search=${push3}`, { 
            method: 'GET'
        })
        .then(function(response) { return response.json(); })
        .then(function(json) {
            // use the json
            console.log(json); // json.results[0].name
            console.log(push3);
            client.sendMessage(message.from, 
            `
            *Personaje de Star Wars*

            Nombre: ${json.results[0].name}
            Altura: ${json.results[0].height} cm
            Peso: ${json.results[0].mass} kg
            Color de pelo: ${json.results[0].hair_color}
            Color de piel: ${json.results[0].skin_color}
            Color de ojos: ${json.results[0].eye_color}
            Nacimiento: ${json.results[0].birth_year}
            Género: ${json.results[0].gender}
            Homeworld: ${json.results[0].homeworld}
            Peliculas: 
            ${json.results[0].films}
            Url: ${json.results[0].url}

            
            `)
        });
    };
    if (msg.body.startsWith('/apiSW ')) {
        var api = msg.body.split(' ')[1];
        console.log(api);
        fetch(`${api}`, { 
            method: 'GET'
        })
        .then(function(response) { return response.json(); })
        .then(function(json) {
            // use the json
            console.log(json); // json.resul    ts[0].name
            console.log(api);
            client.sendMessage(message.from, 
            `
            Api: ${api}

${JSON.stringify(json)}
            
            `)
        });
    }

    if (msg.body.startsWith('/apiSWpeople ')) {
        var push1 = msg.body.split(' ')[1];
        var push2 = msg.body.split(' ')[2];
        var push3 = msg.body.split(' ')[3];
        var push4 = msg.body.split(' ')[4];
        console.log(push1);
        // let myArray = new Array('Wind', 'Rain', 'Fire')
        // let list = json.join(' - ') // list is "Wind - Rain - Fire"
        fetch(`${push1}`, { 
            method: 'GET'
        })
        .then(function(response) { return response.json(); })
        .then(function(json) {
            // use the json
            console.log(json); // json.resul    ts[0].name
            let jsonStrinfieado = JSON.stringify(json)
            client.sendMessage(message.from, 
            `
            Api: ${push1}

            ${jsonStrinfieado.join(' ----- ')}
            
            `)
        });
    }


    switch(message.body) {
        case 'Muni-Bot':
        client.sendMessage(message.from, `Hola: ${message.author}, ${message.id}, ${message.orderId}, ${message.rawData}, ${message.to}, ${message.timestamp}, ${message.token}`);
        break;
        case 'Hola12':
            let button = new Buttons(
                'Soy *Muni-Bot*, permiteme ayudarte con tus consultas y preguntas. Cuéntame, ¿En qué te puedo ayudar? (Escribe Opciones para saber las opciones)"',
                [{body:'Opciones'}],
                '¡Hola!',
                'Muni-Bot(Prueba V1)'
            );
            client.sendMessage(message.from, button);
            break;
        case 'Opciones':
            let sections = [
                {
                  title: "Escoja su opción", //titulo adentro de la lista
                rows: [
                    {
                    title: "Preguntas",
                    //description: "¿Tienes dudas o preguntas? Permiteme ayudarte. ;)",
                    }, // Lista 1
                    {
                    title: "Sugerencias",
                    //description: "Las sugerencias son vitales para poder mejorar siempre.",
                    }, // Lista 2
                    {
                    title: "¿Quiénes somos?",
                    //description: "Nuestra identidad, nos presentamos!",
                    }, // Lista 3
                    {
                    title: "Redes sociales",
                    //description: "¿Deseas estar al día de las publicaciones del colegio? Aquí podrás saberlo",
                    }, // Lista 4
                    {
                    title: "Plan evolutivo",
                    //description: "¿Quieres informarte? ¡Genial!",
                    }, // Lista 5
                ],
                },
            ];
            let list = new List(
                "¡Excelente! A continuación tienes las formas en las que te puedo ayudar, presionando Alternativas podrás observar alguna que desees:", // body
                "Alternativas", // Boton a presionar
                sections,
                "Opciones", // tittle
                "Muni-Bot" // copyright ==?
            );
            client.sendMessage(message.from, list);
            break;
        case 'Preguntas':
            client.sendMessage(message.from, `¡Fantástico! Cuéntame, ¿Cuál es tu pregunta? En lo posible un humano podrá atenderte y ayudarte. Una vez termines puedes volver a ver las alternativas 🥳🎉🎊`);
            break;
        case 'Sugerencias':
            client.sendMessage(message.from, `Wow! me encantan las sugerencias. Por favor, cuéntame más 🎓🤸‍♀️`);
            break;
        case '¿Quiénes somos?':
            client.sendMessage(message.from, `Una gran pregunta, en efecto. Nosotros somos _*"El Partido Unido Estudiantil"*_, el Municipio Escolar, un grupo de estudiantes que incentivados por querer ser cada día mejor, y querer apoyar a nuestro Colegio: I.E "Nicanor Rivera Cáceres" 7050. Y permitir adaptar los diferentes conocimientos e ideas de forma progresiva de acuerdo a la nuevas tecnologías. \n Creemos en que todos pueden sumarse, por eso. Si te interesa unirte y formar parte de nosotros. Eres muy bienvenido!`);
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(
                "./logo.webp"
                );
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
            break;
        case 'Redes sociales':
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(
                "./instagramNRC.jpg"
                );
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(
                "./facebookNRC.jpg"
                );
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
            client.sendMessage(message.from, `*Facebook:* https://www.facebook.com/subdireccionnrc \n *Instagram:* https://www.instagram.com/i.e_nicanor_rivera_caceres/`);
            break;
        case 'Plan evolutivo':
            setTimeout(async () => {
                const media = await MessageMedia.fromFilePath(
                "./Plan Evolutivo.pdf"
                );
                client.sendMessage(message.from, media);
            }, DELAY_TIME);
            break;
        case 'Chiste':
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
            const aleatorio = chistes[Math.floor(Math.random() * chistes.length)];
            client.sendMessage(message.from, aleatorio)
            break;
        case 'Chats001':
            let chats = await client.getChats();
            client.sendMessage(message.from, `The bot has ${chats.length} chats open.`);
            break;
        case 'Info001':
            let info = client.info;
            client.sendMessage(message.from, `
                *Connection info*
                User name: ${info.pushname}
                My number: ${info.wid.user}
                Platform: ${info.platform}
            `);
            break;
        case 'InfoQuoted':
            const quotedMsg = await msg.getQuotedMessage();

            quotedMsg.reply(`
                ID: ${quotedMsg.id._serialized}
                Type: ${quotedMsg.type}
                Author: ${quotedMsg.author || quotedMsg.from}
                Timestamp: ${quotedMsg.timestamp}
                Has Media? ${quotedMsg.hasMedia}
            `);
            break;
        case 'InfoMedia':
            const attachmentData = await msg.downloadMedia();
            msg.reply(`
                *Media info*
                MimeType: ${attachmentData.mimetype}
                Filename: ${attachmentData.filename}
                Data (length): ${attachmentData.data.length}
            `);
            break;
        case 'InfoGrupo':
            let chat1 = await msg.getChat();
            if (chat1.isGroup) {
                msg.reply(`
                    *Group Details*
                    Name: ${chat1.name}
                    Description: ${chat1.description}
                    Created At: ${chat1.createdAt.toString()}
                    Created By: ${chat1.owner.user}
                    Participant count: ${chat1.participants.length}
                `);
            } else {
                msg.reply('This command can only be used in a group!');
            }
            break;
        case 'CrearTyping':
            const chat = await msg.getChat();
            // simulates typing in the chat
            chat.sendStateTyping();
            break;
        case 'Prueba001':
            var data;
            fetch('https://swapi.dev/api/people/?search=luke', { 
                method: 'GET'
            })
            .then(function(response) { return response.json(); })
            .then(function(json) {
                // use the json
                console.log(json.results[0].films); // json.results[0].name
                client.sendMessage(message.from, 
                `
                *Personaje de Star Wars*

                Nombre: ${json.results[0].name}
                Altura: ${json.results[0].height} cm
                Peso: ${json.results[0].mass} kg
                Color de oelo: ${json.results[0].hair_color}
                Color de piel: ${json.results[0].skin_color}
                Color de ojos: ${json.results[0].eye_color}
                Nacimiento: ${json.results[0].birth_year}
                Género: ${json.results[0].gender}
                
                `)
                
            });
            break;
    }
});

// -------------------------------------------------------------------------



// ------------------------------------------------------------------------


client.on('message_revoke_everyone', async (after, before) => {
    // Fired whenever a message is deleted by anyone (including you)
    if (before) {
        console.log(`
    ┌───── Mensaje Borrado ─────
    │ De: ${before.id.remote}
    │ Body: ${before.body}    
    │                         
    └───────────────────────────
    `.cyan.bold); // message before it was deleted.
    }
});

client.on('message_create', (message) => {
    // Fired on all message creations, including your own
    if (message.fromMe) {
        // do stuff here
    }
});