document.write('randomizer.js is loading properly');

/* globals productOption */
/*exported displaySets */

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(randomNumber(99));