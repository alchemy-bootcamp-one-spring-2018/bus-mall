/* globals images getRandomNumberSet */
/* exported totalGuesses*/

const IMAGES_TO_SHOW = 3;
const rootElement = document.getElementById('picture-root');
var totalGuesses = 0;

var randomNumberSet = getRandomNumberSet(IMAGES_TO_SHOW, images.length);
console.log('random number set:', randomNumberSet);

for(let index = 0; index < IMAGES_TO_SHOW; index ++) {
    let imageIndexToGet = randomNumberSet[index];
    images[imageIndexToGet].render(rootElement);
}


