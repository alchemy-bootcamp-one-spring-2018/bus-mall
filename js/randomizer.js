'use strict';
/* global productOption */

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
        
        imageArray[i] = selectedImage.image;
        productNameArray[i] = selectedImage.name;
        //remove the selected item to avoid duplication
        productOption.splice(index, 1);
    }
    
}
selectImages(productOption);

