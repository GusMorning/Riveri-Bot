/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({projectId: 'sigma-outlook-361916'});

async function quickStart() {
  // The text to translate
  const text = 'yes SUBTRACT FROM BOTH SIDES';

  // The target language
  const target = 'es';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();