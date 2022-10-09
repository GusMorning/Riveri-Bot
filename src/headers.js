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
let chistes = [
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

/* --------------------------------- Saludo --------------------------------- */
var bodyTextoSaludo = 'Me alegra verte por aquí. Estoy programado para apoyarte en tu vida con mis funciones especiales, ¿Cuáles son? veámos!\n┌————————————\n✅ Introducción: ¿Deseas entender qué soy, cómo usarme y mis funciones? Esta sección será perfecta para ti pues te servirá de guía para que puedas aprovecharme al máximo.\n└————————————\n┌————————————\n👩‍💻 Lista de Bots: Encontrarás todos nuestros bots a tu servicio desde tu teléfono! Encontrarás todos nuestros bots a tu servicio desde tu teléfono!\n└————————————\n';
var tituloTextoSaludo = `┌————————————\n🤖 Hola! Soy NRC-Bot\n└————————————`;
var footerTextoSaludo = `¡Ten un grandioso día!`;
/* ------------------------------ Introduccion ------------------------------ */
var bodyTextoIntroduccion = '┌————————————\n*Proyecto Framework para la Creación de Bots Multiusos*\n└————————————\n┌————————————\nEs un proyecto científico de alternativa de solución tecnológica, programado y creado por nosotros a fin de combatir las problemáticas que tenemos en nuestra sociedad\n└————————————';
var tituloTextoIntroduccion = '┌————————————\n✅ Introducción\n└————————————'
var footerTextoIntroduccion = 'Presiona los botones para conocer más';
/* ------------------------------- Problema 1 ------------------------------- */
var bodyTextoProblema1 = '┌————————————\n- La escasa enseñanza de programación en los colegios: Es conocido que estamos en una era donde el uso y avance de las tecnologías es indispensable, sin embargo, ¿Estamos avanzando nosotros con ella? La respuesta es que no, porque aprendimos a utilizarlas pero no a crearlas y esto nos afecta a todos, ya que el mundo laboral necesita en demanda mayores conocimientos. Siendo así que los jóvenes al salir del colegio se encuentran una realidad muy diferente a la que se les enseña. \n└————————————\n¿La solución? Framework para la creación de Bots ✅\n┌————————————\nUna framework es una herramienta que ofrece una estructura base para elaborar un proyecto con objetivos específicos, en resumen, la herramienta que te permitirá realizar proyectos de forma más sencilla y con los recursos que necesites para ello. Nuestra Framework nos permite responder a estas preguntas: \n└————————————\n┌————————————\n❌ ¿No sabes programar?\n✅ La Framework te enseñará para que puedas aprender desde 0 con ejemplos prácticos de su uso.\n└————————————\n┌————————————\n❌ ¿Es complicado? \n✅ Los materiales serán didácticos y se complementan con videos tutoriales.\n└————————————\n❌ ¿Qué proyectos me ayudará a hacer?\n✅ Podrás crear tu propio Bot para WhatsApp lo que desees hacer.\n└————————————\n┌————————————\n❌ ¿Tengo que pagar? \n✅ Es totalmente gratuita, y está subida en https://github.com/GusMorning/Riveri-Bot\n└————————————';
var tituloTextoProblema1 = '┌————————————\nP R O B L E M A T I C A 1️⃣\n└————————————';
/* ------------------------------- Problema 2 ------------------------------- */
var bodyTextoProblema2 = '┌————————————\n- Los profesionales de salud cuando hacen su diagnóstico a los pacientes tienen en cuenta una problemática crucial: El tiempo que les demora realizar las fórmulas como lo es calcular el IMC, déficit de agua, hierro, etc. Que traducido a efectos prácticos, es tiempo no aprovechable. Produciendo así mayor tiempo de demora en la atención de pacientes, y retrasando su ardua labor.\n└————————————\n¿Cómo lo podemos solucionar? \nPresentamos a Medi-Bot ✅\n# Importante: \n*Solo para médicos*\n┌————————————\nPermite calcular el índice de masa corporal (IMC), el déficit del agua en el cuerpo (ACT), la función renal (CCr) (Cockcroft-Gault) y el déficit de hierro mediante la fórmula de Ganzoni, así como también las instrucciones para actuar en caso de una emergencia de salud, por ejemplo: Reanimación Cardio Pulmonar básica (RCP) o la actuación ante accidentes que comprometen la vida como las hemorragias o posibles fracturas, los números de teléfonos de emergencia y los consejos para tener un estilo de vida saludable.\n└————————————\n┌————————————\n❌¿Tarda mucho?\n✅ Hace los cálculos en menos de 2 segundos sin importar la complejidad.\n└————————————\n┌————————————\n❌¿Los cálculos son precisos?\n✅ Exactitud de cálculo al 100%\n└————————————\n┌————————————\n❌¿El Medi-Bot suplantará al doctor?\n✅ Será su asistente personal para ayudarlo, dentro del límite que será solo hacer las operaciones matemáticas que necesite realizar.\n└————————————';
var tituloTextoProblema2 = '┌————————————\nP R O B L E M A T I C A 2️⃣\n└————————————';
/* --------------------- ¿Cómo lo puedo utilizar al bot? -------------------- */
var tituloTextoP2ComoUsar = '┌————————————\nEjemplo de Uso 🤖\n└————————————';
var bodyTextoP2ComoUsar = '┌————————————\nCaso 1 ✅\nUn paciente adulto mayor de 72kg fue detectado con 154 de sodio en sangre. ¿cuánto déficit o superávit de agua tiene? \n└————————————\n┌————————————\nPara este ejemplo se utiliza la fórmula para el cálculo del déficit de agua corporal, con la fórmula: ACT actual * ( (140 / NA actual) - 1) con la cual se obtendrá el resultado. Para observarlo presionar Boton "/DeficitDeAgua 36 154"\n└————————————\n┌————————————\nCaso 2 ✅\nUn adolescente de 17 años llamado Antonio quiere calcular su Índice de Masa Corporal (IMC): Cuenta con una altura de 1.86 metros y peso de 69 kg.\n└————————————\n┌————————————\nSe utilizará la fórmula: IMC = Peso en kg / (Altura en metros)^2, para ello *presionar Boton "/imc Antonio 17 1.86 69 Masculino"\n└————————————\n┌————————————\nCaso 3✅\nUna paciente presenta un peso de 68kg, una edad de 39 años y una creatina en plasma de 0.9mg/dl. ¿Cuál es el estado de su riñón?\n└————————————\n┌————————————\nUsaremos la fórmula de Cockcroft-Gault para el cálculo. Presionar Boton "/CalculoRenal 68 0.9 39 Femenino"\n└————————————'
/* -------------------------- Lista de comandos P2 -------------------------- */
var tituloTextoP2Comandos = '┌————————————\nC O M A N D O S 👩‍💻\n└————————————'
var bodyTextoP2Comandos = '├ *Calculadora de IMC*\n├ /imc [Nombre] [Edad] [Altura en metros] [Peso en kg] [Sexo]\n└————————————\n├ *Calculadora de ACT* \n├ /ACT [Edad] [Clasificación]\n└————————————\n├ *Calculadora de Cockcroft-Gault*\n├ /DeficitDeAgua [Peso] [Creatina en plasma mg/dl] [Edad] [Sexo]\n└————————————\n├ *Calculadora de Déficit de Hierro*\n├ /DeficitDeHierro [Peso] [Hb real] [Hb diana] \n└————————————\n├ *Reanimación Cardio Pulmonar*\n├ /RCP\n└————————————\n├ *Prácticas para un estilo de vida saludable*\n├ /tips\n└————————————\n├ *Actitudes frente a una hemorragia*\n├ /hemorragia\n└————————————'
/* ------------------------------- Problema 3 ------------------------------- */
var tituloTextoProblema3 = '┌————————————\nP R O B L E M A T I C A 3️⃣\n└————————————';
var bodyTextoProblema3 = '┌————————————\n- ¿Cuánto tiempo demora hacer cálculos complejos para el humano? La realidad es que va aumentando en calidad de qué tantas operaciones tenga que hacer, estando expuesto a errores en el proceso por la naturaleza del fallo en las personas. Usando de ejemplo, el cálculo del área, perímetro, hipotenusa que los estudiantes realizamos con bastante regularidad.\n└————————————\nAnte ello, ¿Cuál es la solución? Euler-Bot ✅\n┌————————————\n❌¿Necesitas hacer muchos ejercicios y los haces manual?\n✅ Euler-Bot te ayudará con el cálculo automatizado de muchas fórmulas en cuestión de segundos.\n└————————————\n┌————————————\n❌¿ Enseña cuáles son los procedimientos o fórmula?\n✅ En los pasos podrás encontrar la operación que se realizó y el resultado.\n└————————————';
/* --------------------- Lista de comandos P3 Euler-Bot --------------------- */
var tituloTextoP3Comandos = `┌————————————
C O M A N D O S 👩‍💻
└————————————`;
var bodyTextoP3Comandos = `├ *Calculadora de Área usando la Ley de Heron*
├ Sirve para calcular el área de un triángulo sabiendo sus tres lados
├ /Calcular Triangulo Heron [lado1] [lado2] [lado3]
└————————————
├ *Calculadora de Altura*
├ Sirve para hallar la altura de un triángulo conociendo sus tres lados
├ /Calcular Triangulo Altura [lado1] [lado2] [lado3]
└————————————
├ *Calculadora de Área sabiendo base y altura*
├ Permite hallar el área de un triángulo conociendo su base y altura
├ /Calcular Triangulo Área [Base] [Altura]
└————————————
├ *Calculadora de Hipotenusa*
├ Calcula el valor de la hipotenusa de un triángulo con los dos catetos restantes
├ /Calcular Triangulo Hipotenusa [Cateto1] [Cateto2]
└————————————
├ *Calculadora de velocidad de un objeto*
├ Permite conocer la velocidad de un objeto mediante la distancia y el tiempo. 
├ /Calcular Fisica Velocidad [Distancia] [km, m, cm] [Tiempo] [hora, minuto, segundo] 
└————————————`;
/* ------------------------- Como usar P3 Euler-Bot ------------------------- */
var tituloP3ComoUsar = `┌————————————
Ejemplo de Uso 🤖
└————————————`;
var bodyTextoP3ComoUsar = `┌————————————
*Caso 1 ✅*
Un alumno desea calcular el área y perímetro de un triángulo sabiendo sus tres lados: Siendo estos a=4 cm, b=5 cm y c=3 cm
└————————————
┌————————————
Para este ejemplo se aplica la fórmula de Heron. Presiona el botón */Calcular Triangulo Heron 4 5 3*
└————————————
┌————————————
*Caso 2 ✅*
Un joven desea conocer la velocidad de un bus que recorrió 450 metros en 20 minutos.
└————————————
┌————————————
Aplicará el bot la fórmula de V = d/t. Presionar el botón */Calcular Fisica Velocidad 450 m 20 min*
└————————————
┌————————————
*Caso 3✅*
Un estudiante para sus ejercicios diarios de geometría quiere calcular la hipotenusa de un triángulo, siendo a = 3 & b = 4
└————————————
┌————————————
Para ello, se utiliza el Teorema de Pitágoras. Presionar el botón */Calcular Triangulo Hipotenusa 3 4*
└————————————`;
/* ------------------------------ Comando /rcp ------------------------------ */
var textoRCP = `┌————————————
*Reanimación Cardio Pulmonar*
└————————————
┌————————————
La reanimación cardiopulmonar es una técnica que puede llegar a salvar vidas. Este proceso consta de varios pasos el cual se deben realizar con delicadeza para no empeorar el estado del paciente o generar otro problema mayor.
└————————————
┌————————————
*✅ Paso 1*: Comprobar si el paciente está completamente inconsciente, esto se hace dando palmadas suaves o piñizcos.
└————————————
┌————————————
*✅ Paso 2*: Se debe inclinar su cabeza hacia atrás, para abrir la vía respiratoria que puede estar obstruida por la lengua. Para realizarlo de forma delicada y suave se coloca las yemas de los dedos en el mentón y empujar suavemente.
└————————————
┌————————————
*✅ Paso 3*: Coloca tus manos aproximadamente a la mitad de los pectorales mayores, tomando como referencia el esternón, ligeramente hacia el lado izquierdo y realizar 30 compresiones continuas (dos compresiones por segundo aproximadamente) con los brazos estirados y con el talón de las manos. Se debe realizar una presión hasta hundir el tórax.
└————————————
┌————————————
*✅ Paso 4*: Subir el mentón del paciente y con los dedos tapar la nariz y abrir la boca para proporcionarle respiración boca a boca. Inhalar y exhalar en la boca del paciente, este procedimiento se debe hacer 2 veces, en caso de que el paciente no responda, repita el paso 3 y el paso 4 hasta que llegue el personal médico.
└————————————`;
/* ------------------------------ Comando /tips ----------------------------- */
var textoTips = `┌————————————
*Prácticas para un estilo de vida saludable*
└————————————
┌————————————
Según la OMS (Organización Mundial de la Salud) define salud como el estado de bienestar completo, físico, mental y social. Esto significa que una persona sana tiene que estar físicamente bien, libre de patologías en su cuerpo, además debe estar emocional y sentimentalmente en paz y alegría, como también satisfecho plenamente con la actividad que hace para conseguir su sustento y actuar con pertinencia en su ámbito social, ejerciendo una ciudadanía responsable y participativa con ética y cuidado del medio ambiente.
└————————————
┌————————————
Todo lo mencionado anteriormente involucra una serie de prácticas adecuadamente concatenadas y ejecutadas conscientemente por cada persona, que está inmersa en una sociedad; la cual le brinda todas las oportunidades para que logre vivir en un estilo de vida saludable.
└————————————
┌————————————
*✅ Tip 1*: Su cuerpo físico debe recibir todos los nutrientes y sustancias que necesita para que todos los órganos funcionen adecuadamente.
└————————————
┌————————————
*✅ Tip 2*: Debe cumplir con darle un descanso de mínimo 8 horas de sueño.
└————————————
┌————————————
*✅ Tip 3*: Desarrollar prácticas de higiene adecuadas a las demandas de cada parte de su cuerpo y utilizar la ropa y calzados que no perjudiquen su piel o cualquier otro órgano.
└————————————
┌————————————
*✅ Tip 4*: Debe proporcionarle actividades de distracción y recreación para que sus emociones estén balanceadas.
└————————————
┌————————————
*✅ Tip 5*: Evitar el sedentarismo, realizando por lo menos una caminata diaria por 15 minutos cada día.
└————————————
┌————————————
*✅ Tip 6*: Tener conciencia moral en su actuación con el entorno social, para que logre armonizar sus pensamientos, emociones y sentimientos.
└————————————
┌————————————
*✅ Tip 7*: El ambiente que le rodea debe estar libre de contaminación del aire, del agua, acústica, entre otros.
└————————————
┌————————————
*✅ Tip 8*: Debe haber elegido una actividad laboral acorde a sus capacidades; para que su desempeño sea eficiente y con logro de satisfacción personal, que lo motive a hacer cada día su máximo esfuerzo y de esa manera sea un agente activo para lograr un mundo mejor.
└————————————
┌————————————
*✅ Tip 9*: Tratar a sus semejantes del modo como a uno mismo le gustaría ser tratado
└————————————
┌————————————
*🥳 Conclusiones*: Conservar la buena salud depende de cada uno, de sus pensamientos, sus decisiones y sus actitudes que asume diariamente.
Seamos conscientes de que vivir saludablemente o enfermar no es una cuestión de privilegio, designio divino o castigo; es simplemente la suma de nuestras decisiones para actuar pertinentemente con nuestro cuerpo y nuestro entorno.
└————————————`;
/* -------------------------- Directorio teléfonico ------------------------- */
var textoDirectorio = `┌————————————
*Directorio de teléfonos de emergencia*
└————————————
┌————————————
Según la página oficial del gobierno del Perú los números importantes que todos los ciudadanos deberían recordar en caso de emergencias son:
└————————————
┌————————————
├ *Número de la policía*: 105
├ *Denuncia contra la violencia familiar y sexual*: 100
├ *EsSalud*: 107
├ *Policía de carreteras*: 110
├ *Infosalud*: 113
├ *Defensa Civil*: 115
├ *Bomberos*: 116
├ *Cruz roja*: 01 266 0481
├ *Atención medica móvil*: 106
└————————————`;
/* ------------------------------- Hemorragia ------------------------------- */
var textoHemorragia = `┌————————————
*¿Qué hacer en caso de una hemorragia?*
└————————————
┌————————————
Para el tratamiento de las hemorragias se necesita tener algún pañuelo o ropa que pueda sustituirlo. Se debe presionar con el pañuelo la parte de la hemorragia, en caso de que el pañuelo se llene de sangre puede colocar otro pañuelo encima sin dejar de presionar el área afectada, en el caso de que sea ropa, puede doblarla para generar otra capa sin mover la parte que está pegada a la herida, puesto que esto podría destruir coágulos y abrir la herida nuevamente. Después de que la herida deje de sangrar podría colocar una venda con un poco de presión y llevarlo a urgencias.
└————————————
`
/* -------------------------------- Medi-Bot -------------------------------- */
var textoMediBot = `┌————————————
✅ ¡Bienvenido, soy tu asistente de cálculos médicos *Medi-Bot*! ¿En qué te puedo ayudar? Revisa mis opciones de comandos y fórmulas.
└————————————`;
var tituloMediBot = `┌————————————
Medi-Bot 🍎👩‍⚕️
└————————————`;
/* -------------------------------- Euler-Bot ------------------------------- */
var tituloTextoEulerBot = `┌————————————
Euler-Bot 🧮
└————————————`;
var bodyTextoEulerBot = `┌————————————
✅ Hola, soy Euler-Bot! Estoy inspirado en el matemático suizo Leonhard Euler. Puedo ayudarte a realizar cálculos de fórmulas matemáticas de forma eficaz y rápida. ¿Cuáles son? Presiona los botones! 
└————————————`
/* ------------------------- Ciudadanía-Bot Derechos ------------------------ */
var tituloDerechos = `┌————————————
*Derechos fundamentales*
└————————————
┌————————————
Los derechos y deberes de todo ciudadano, son las normas para fomentar la convivencia social y las relaciones entre los ciudadanos y las instituciones políticas que gestionan y organizan la sociedad. Estos se estructuran alrededor de dos principios: el que indica que el ejercicio de todo derecho implica deberes y el de reciprocidad, que impone la mutua participación del estado y la sociedad. 
Según la constitución política del Perú, son derechos fundamentales de la persona: 
┌————————————
⚖️ La igualdad ante la ley, nadie debe ser discriminado por motivo de origen, raza, sexo, idioma, religión, opinión, condición económica o de cualquier otra índole.
└————————————
┌————————————
🕊️ Derecho a la libertad y seguridad personal, no se permite forma alguna de restricción de la libertad personal salvo en los casos previstos por la ley, están prohibidas la esclavitud, la servidumbre y la trata de seres humanos en cualquiera de sus formas.
└————————————
┌————————————
🏥 Derecho a la salud y medio familiar, todos tienen derecho a la protección de su salud, la del medio familiar y la de la comunidad, así como el deber de contribuir a su promoción y defensa.
└————————————
┌————————————
📚 Derecho a la gratuidad y obligatoriedad de la educación en los niveles inicial, primaria y secundaria, en las instituciones del estado la educación es gratuita. En las universidades públicas, el Estado garantiza el derecho a educarse gratuitamente a los estudiantes que mantengan un rendimiento satisfactorio y no cuenten con los recursos económicos necesarios.
└————————————
`;
/* ------------------------- Ciudadanía-Bot Comandos ------------------------ */
var comandosCiudiBot = `┌————————————\nC O M A N D O S 👩‍💻\n└————————————`;
var comandosTexto = `├ *Derechos ciudadanos*
├ ¿Quieres sabes tus derechos fundamentales?
├ /Derechos
└————————————
├ *Habilidades socioemocionales*
├ Entender cómo son las emociones es fundamental.
├ /Emociones
└————————————
├ *Clima de una zona*
├ Conoce el clíma actual de una zona de tu preferencia alrededor del mundo.
├ Temperatura [zona]
└————————————
├ *Traductor de Español a Inglés*
├ Traduce un mensaje.
├ Traducir [texto]
└————————————`
/* ---------------------- Habilidades socioemocionales ---------------------- */
var tituloHabilidadesEmocionales = `┌————————————
*Habilidades emocionales*
└————————————
┌————————————
*Definición*
└————————————
┌————————————
Son el conjunto de herramientas que permiten a las personas poder entender y regular sus propias emociones, sentir y mostrar empatía por los demás, establecer y desarrollar relaciones positivas, tomar 
└————————————
┌————————————
Permiten el autoconocimiento para tener una mejor relación con nosotros mismos, conocernos y aceptarnos, cuidarnos y relacionarnos de manera positiva con nuestro entorno.
└————————————
┌————————————
La evidencia acumulada muestra que ser cognitivamente inteligente no es suficiente para alcanzar el éxito académico, profesional y personal. El papel emocional empieza a tomar un papel protagónico en la sociedad, por lo tanto, la inteligencia cognitiva y emocional deben desarrollarse a la par en los centros de educación ya que el desarrollo socio emocional tiene impacto en la autoestima y en las habilidades cognitivas.
└————————————
┌————————————
Las habilidades socioemocionales se adquieren y se desarrollan desde la infancia, siendo la adolescencia la etapa más significativa, continuando su desarrollo a lo largo de toda la vida.
└————————————
`
const aleatorio = chistes[Math.floor(Math.random() * chistes.length)];
/* -------------------------------- !SECTION -------------------------------- */
class menu {
    ubicacion;
    texto;
    constructor(ubicacion, texto) {
        this.ubicacion = ubicacion;
        this.texto = texto;
    }
}
/* --------------------------- SECTION ubicaciones de archivos -------------------------- */
var ubicacionQuienesSomos = "./media/municipio.png";
var ubicacionPlanEvolutivo = "./media/Plan Evolutivo.pdf"
var ubicacionInstagram = "./media/instagramNRC.jpg";
var ubicacacionFacebook = "./media/facebookNRC.jpg";
var ubicacionPaginaWeb = "./media/screenshot.png";
var ubicacionIMC = './media/screenshot_23.png';
var ubicacionCalculoRenal = "./media/calculo_renal.png";
var ubicacionDeficitDeHierro = "./media/deficit_de_hierro.png";
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
const chistesFuncion = {
    chiste: chistes,
    funcion: aleatorio
};
var botones = {
    ubicacionSaludo: './media/imagenBotonSaludo.png',
    ubicacionProblema1: './media/imagenBotonProblematica1.png',
    ubicacionProblema2: './media/imagenBotonProblematica2.png',
    ubicacionProblema3: './media/imagenBotonProblematica3.png',
    ubicacionProblema3Comandos: './media/1.png',
    ubicacionListaDeBots: './media/imagenListaDeBots.png',
    ubicacionEulerBot: './media/imagenEulerBot.png',
    ubicacionRCP: './media/imagenRCP.png',
    ubicacionTips: './media/imagenPracticasSaludables.png'

}
var textos = {
    textoListaBots: `┌————————————
💻 LISTA DE BOTS 
└————————————
┌————————————
✅ Euler-Bot => Ideado para cálculos matemáticos, operaciones de física y conversión de unidades.
└————————————
┌————————————
✅ Medi-Bot => Pensado para ayudar al personal de salud con un asistente de cálculos ideal.
└————————————
┌————————————
✅ Riveri-Bot => Espacio dedicado a nuestro colegio I.E "Nicanor Rivera Cáceres" 7050 que transmite toda la información relevante.
└————————————
┌————————————
✅ Ciudadanía-Bot => Conoce más acerca de tus derechos, prueba las trivias, y divertete!
└————————————
┌————————————
✅ Marie Curie-Bot => Centrado para la divulgación de la ciencia, encontrarás experimentos divertidos y datos interesantes cientificos. 
└————————————`,
    textoRCP,
    textoTips,
    textoDirectorio,
    textoHemorragia,
    tituloHabilidadesEmocionales,
    tituloDerechos
}
// ────────────────────────────────────────────────────────────────────────────────
const botMenu = new Buttons(
    "Soy *Riveri-Bot*, permiteme ayudarte con tus consultas y preguntas. Cuéntame, ¿En qué te puedo ayudar? (*Presiona el botón de Opciones*)",
    [{body: "Opciones", id: 'test-1'}],
    "¡Hola! 🍃",
    "Riveri-Bot"
);
/* --------------------------------- Saludo --------------------------------- */
let saludoNuevoBoton = new Buttons(
    bodyTextoSaludo,
    [{body: '✅ Introducción', id: 'test-1'}, 
    {body: '👩‍💻 Lista de Bots', id: 'test-2'}],
    tituloTextoSaludo,
    footerTextoSaludo);
/* ------------------------------ Introduccion ------------------------------ */
let botonIntroduccion = new Buttons(
    bodyTextoIntroduccion,
    [{body: 'Problemática 1️⃣', id: 'test-3'}, 
    {body: 'Problemática 2️⃣', id: 'test-4'}],
    tituloTextoIntroduccion,
    footerTextoIntroduccion);
/* ------------------------------- Problema 1 ------------------------------- */
let botonProblema1 = new Buttons(
    bodyTextoProblema1,
    [{body: 'Problemática 2️⃣'},
    {body: 'Problematica 3️⃣'}],
    tituloTextoProblema1,
    footerTextoIntroduccion);
/* ------------------------------- Problema 2 ------------------------------- */
let botonProblema2 = new Buttons(
    bodyTextoProblema2,
    [{body: 'Problematica 3️⃣'},
    {body: 'Lista de comandos 👩‍💻'},
    {body: '¿Cómo puedo usar el Bot? 🥳'}],
    tituloTextoProblema2,
    footerTextoIntroduccion
)
/* -------------------------- Como usar Problema 2 -------------------------- */
let botonP2ComoUsar = new Buttons(
    bodyTextoP2ComoUsar,
    [{body: '/DeficitDeAgua 36 154'},
    {body: '/imc Antonio 17 1.86 69 Masculino'},
    {body: '/CalculoRenal 68 0.9 39 Femenino'}],
    tituloTextoP2ComoUsar,
    footerTextoIntroduccion
)
/* ---------------------- Lista de comandos Problema 2 ---------------------- */
let botonP2Comandos = new Buttons(
    bodyTextoP2Comandos,
    [{body: '¿Cómo puedo usar el Bot? 🥳'}],
    tituloTextoP2Comandos,
    footerTextoIntroduccion
)
/* ------------------------------- Problema 3 ------------------------------- */
let botonProblema3 = new Buttons(
    bodyTextoProblema3,
    [{body: 'Lista de comandos 👨‍💻'},
    {body: '¿Cómo usar? 🧮'}],
    tituloTextoProblema3,
    footerTextoIntroduccion
)
/* ----------------- Lista de comandos Problema 3 Euler Bot ----------------- */
let botonP3Comandos = new Buttons(
    bodyTextoP3Comandos,
    [{body: '¿Cómo usar? 🧮'}],
    tituloTextoP3Comandos,
    footerTextoIntroduccion
)
/* -------------------------- Cómo usar Problema 3 -------------------------- */
let botonP3ComoUsar = new Buttons(
    bodyTextoP3ComoUsar,
    [{body: '/Calcular Triangulo Heron 4 5 3'}, {body: '/Calcular Fisica Velocidad 450 m 20 min'}, {body: '/Calcular Triangulo Hipotenusa 3 4'}],
    tituloP3ComoUsar,
    footerTextoIntroduccion
)
/* -------------------------------- Euler-Bot ------------------------------- */
let botonEulerBot = new Buttons(
    bodyTextoEulerBot,
    [{body: 'Lista de comandos 👨‍💻'},
    {body: '¿Cómo usar? 🧮'}],
    tituloTextoEulerBot,
    footerTextoIntroduccion
)
/* -------------------------------- Medi-Bot -------------------------------- */
let botonMediBot = new Buttons(
    textoMediBot,
    [{body: 'Lista de comandos 👩‍💻'},
    {body: '¿Cómo puedo usar el Bot? 🥳'}],
    tituloMediBot,
    footerTextoIntroduccion
)
/* ----------------------------- Ciudadania-Bot ----------------------------- */
const botonCiudadania = new Buttons(
    `┌————————————
✅ Hey! ¿Cómo estás? soy Ciudadanía-Bot, pero puedes llamarme Ciudi
└————————————`,
    [{body: '👩‍💻 Lista de comandos'}],
    '┌————————————\nCiudadanía-Bot 🌆\n└————————————',
    'Presiona el botón');
const botonComandosCiudi = new Buttons(
    comandosTexto,
    [{body: 'Traducir Hey, soy Ciudi. Un gusto traducirles un texto'},
    {body: 'Temperatura Lima'}],
    comandosCiudiBot,
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
/* -------------------------------------------------------------------------- */
/*                                Lista de Bots                               */
/* -------------------------------------------------------------------------- */
var seccionesFunciones1 = [{
    title: tituloDentroFuncionesMenu, //titulo adentro de la lista
    rows: [{
            title: "Euler-Bot",
            //description: "¿Tienes dudas o preguntas? Permiteme ayudarte. ;)",
        }, // Lista 1
        {
            title: "Medi-Bot",
            //description: "Las sugerencias son vitales para poder mejorar siempre.",
        }, // Lista 2
        {
            title: "Ciudadanía-Bot",
            //description: "Nuestra identidad, nos presentamos!",
        }, // Lista 3
        {
            title: "Riveri-Bot",
            //description: "¿Deseas estar al día de las publicaciones del colegio? Aquí podrás saberlo",
        }, // Lista 4
        {
            title: "Marie Curie-Bot",
            //description: "¿Quieres informarte? ¡Genial!",
        }, // Lista 5
    ],
}, ];
var listaBots = new List(
    '.', // body
    botonFuncionesMenu, // Boton a presionar
    seccionesFunciones1,
    'Lista de Bots', // tittle
    "NRC-Bot" // copyright ==?
);


/* ----------------------------- !SECTION Lista ----------------------------- */
/* -------------------------------- Funciones ------------------------------- */
function calcularPerimetro(radio) {
    let x = 2 * Math.PI * radio;
    x = x.toFixed(2);
    return x
}
function calcularPerimetroSinPi(radio) {
    let x = 2 * radio;
    let perimetro = x + 'π'
    return perimetro
}
function calcularAreaCirculo(radio) {
    let y = Math.PI * ( radio **= 2);
    y = y.toFixed(2);
    return y
}
function calcularAreaCirculoSinPi(radio) {
    let y = radio **= 2;
    return y + 'π'
}
function radioCuadrado(radio){
    return radio **= 2
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
function baseAltura(base, altura) {
    return base * altura
}
function sumaDeLados(a, b, c) {
    let aP = parseInt(a);
    let bP = parseInt(b);
    let cP = parseInt(c);
    let sumas =  (aP + bP) + cP;
    return sumas
}
function semiPerimetro(a, b, c) {
    s = (a + b + c) / 2
    return s
}
function leyHeron(a, b, c) {
    s = (a + b + c) / 2;
    area1 = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    area1 = area1.toFixed(4)
    return area1
}
function calcularAlturaTriangulo(a, b, c) {
    s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    numeroMayor = Math.max(a, b, c);
    h = (area * 2) / numeroMayor;
    return h
}
function calcularHipotenusa(a, b) {
    h = Math.sqrt((a**=2) + (b**=2))
    return h
}
function calcularCateto(a, b) {
    numeroMayor = Math.max(a, b);
    numeroMenor = Math.min(a, b);
    catetoX = Math.sqrt( (numeroMayor **= 2) - (numeroMenor **= 2));
    return catetoX
}
function calcularVelocidad(a, b) {
    v = a / b;
    return v
}
function calcularVelocidadKM(a, b) {
    y = a / 1000
    x = b / 60
    return y/x
}



//
// ────────────────────────────────────────────────── I ──────────
//   :::::: !SECTION F I N A L : :  :   :    :     :        :       :
// ────────────────────────────────────────────────────────────
//
module.exports = {
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
    aleatorio,
    
}