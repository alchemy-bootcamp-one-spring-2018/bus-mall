/* globals images getRandomNumberSet */

const IMAGES_TO_SHOW = 3;
const MAX_GUESSES = 12;
const rootPictures = document.getElementById('picture-root');
const rootResults = document.getElementById('result-root');
//const rootRemaining = document.getElementById('selections-remaining');
var totalGuesses = 0;

drawPictures();

function drawPictures() {

    var randomNumberSet = getRandomNumberSet(IMAGES_TO_SHOW, images.length);
    console.log('random number set:', randomNumberSet);

    for(let index = 0; index < IMAGES_TO_SHOW; index ++) {
        let imageIndexToGet = randomNumberSet[index];
        images[imageIndexToGet].render(rootPictures);
    }

    let pics = document.getElementsByClassName('pic');
    for(let index = 0; index < pics.length; index++) {
        let pic = pics[index];
        pic.addEventListener('click', countClicks);
    }

}

function countClicks() {
    if(totalGuesses < MAX_GUESSES) {
        totalGuesses++;
        // rootRemaining.textContent = MAX_GUESSES - totalGuesses - 1;
        // erase pictures
        while(rootPictures.lastElementChild) {
            rootPictures.lastElementChild.remove();
        }
        drawPictures();
    } else if(totalGuesses === MAX_GUESSES) {
        // report results
        for(let index = 0; index < images.length; index++) {
            images[index].reportResults(rootResults);
        }
    }
}