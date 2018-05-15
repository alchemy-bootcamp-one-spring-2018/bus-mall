document.write('randomizer.js is loading properly');

/* globals productOption */
/*exported displaySets */

var selectedImage = '';

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectImage(productOption) {
    let index = randomNumber(productOption.length);
    let selectedImage = productOption[index];
    productOption.splice(index, 1);
    return selectedImage;
}


// Console logs for testing
console.log(randomNumber(99));
console.log(productOption.length);
console.log(selectedImage);