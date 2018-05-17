'use strict';
/* globals */
/* exported getRandomImage */


function getRandomImage(imageArray) {
    var random = Math.floor(Math.random() * (imageArray.length - 1) + 1);
    var randomImage = imageArray[random];
    imageArray.splice(random, 1);
    console.log(random);
    return randomImage;
}