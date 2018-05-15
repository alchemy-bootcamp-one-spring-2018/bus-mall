document.write('randomizer.js is loading properly');

/* globals productOption  */
/* exported displaySets */

var selectedImage = '';
let imageArray = [];
let image0;
let image1;
let image2;

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectionSet(){

    let copy = selectedImage.slice();
    let VoteOnThis = '';
}

function selectImage(productOption) {
    for(var i = 0; i < 3; i++){
        let index = randomNumber(productOption.length);
        let selectedImage = productOption[index];
        console.log(selectedImage);
        imageArray[i] = selectedImage.image;
        
        productOption.splice(index, 1);
    }
    console.log('image zero  = ' + imageArray[0]);
    console.log('image one  = ' + imageArray[1]);
    console.log('image two  = ' + imageArray[2]);
    
}


// Console logs for testing
console.log(randomNumber(99));
console.log(productOption.length);
console.log(selectedImage);
selectImage(productOption);
