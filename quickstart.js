const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = './Screenshot_20220611-122203.png';


// Performs text detection on the local file
(async() => {
  const [result] =  await client.textDetection(fileName);
  // console.log(result.fullTextAnnotation.text);
  const detections = result.textAnnotations;
  console.log('Text:');
  detections.forEach(text => console.log(text.description));
})();
