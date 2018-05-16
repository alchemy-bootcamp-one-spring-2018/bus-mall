document.write('randomizer.js is loading properly');

/* globals productOption  */
/* exported displaySets */

var selectedImage = '';
let imageArray = [];
let productNameArray = [];

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function selectImages(productOption) {
    for(var i = 0; i < 3; i++){
        let index = randomNumber(productOption.length);
        let selectedImage = productOption[index];
        
        console.log('product option views value = ', productOption[index].viewed);
        console.log(selectedImage.name);
        
        selectedImage.viewed ++;
        imageArray[i] = selectedImage.image;
        productNameArray[i] = selectedImage.name;
        //remove the selected item to avoid duplication
        productOption.splice(index, 1);
    }
    console.log('image zero  = ' + imageArray[0]);
    console.log('image one  = ' + imageArray[1]);
    console.log('image two  = ' + imageArray[2]);
}

