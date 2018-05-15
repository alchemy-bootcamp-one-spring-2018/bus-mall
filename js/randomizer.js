document.write('randomizer.js is loading properly');

/* globals productOption  */
/* exported displaySets */

var selectedImage = '';
let imageOne;
let imageTwo;
let imageThree;

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectionSet(){

    let copy = selectedImage.slice();
    let VoteOnThis = '';
}

function selectImage(productOption) {
    let index = randomNumber(productOption.length);
    let selectedImage = productOption[index];
    console.log(selectedImage.image);
    let imageOne =  selectedImage.image;
    productOption.splice(index, 1);
    console.log('image one  = ' + imageOne);
    
}


// Console logs for testing
console.log(randomNumber(99));
console.log(productOption.length);
console.log(selectedImage);
selectImage(productOption);
