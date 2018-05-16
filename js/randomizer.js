document.write('randomizer.js is loading properly');

'use strict';

/* exported displaySets, selectImages, selectedImage */

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
        productOption[index].viewed ++;
        
        console.log('product option views value = ', productOption[index].viewed);
        console.log(selectedImage.name);
        
        
        imageArray[i] = selectedImage.image;
        productNameArray[i] = selectedImage.name;
        //remove the selected item to avoid duplication
        productOption.splice(index, 1);
    }
    console.log('image zero  = ' + imageArray[1]);
    console.log('image one  = ' + productNameArray[1]);
    console.log('image two  = ' + imageArray[2]);
}
selectImages(productOption);

