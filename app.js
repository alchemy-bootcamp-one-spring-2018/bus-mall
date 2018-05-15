/* globals bag banana bathroom boots breakfast bubblegum chair cthulhu dogDuck
dragon pen petSweep scissors shark sweep tauntaun unicorn usb waterCan wineGlass */
/* exported makeTrio */
'use strict';

let imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck,
    dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function makeTrio() {
    // let trioArray = [];
    for(let i = 0; i < 3; i++) {
        // trioArray.push(randomImage(imageArray));
        let list = document.getElementById('image-list');
        let listItem = document.createElement('li');
        let imageSource = randomImage(imageArray);
        let imageItem = document.createElement('img');
        imageItem.setAttribute('src', imageSource);
        listItem.appendChild(imageItem);
        list.appendChild(listItem);

    }
}

function randomImage(listOfImages) {
    var index = getRandomIndex(listOfImages.length);
    var source = listOfImages[index].source;
    listOfImages.splice(index, 1);
    return source;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// and Marty during Class 4!
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

makeTrio();