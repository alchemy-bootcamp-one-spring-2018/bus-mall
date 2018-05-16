/* globals bag banana bathroom boots breakfast bubblegum chair cthulhu dogDuck
dragon pen petSweep scissors shark sweep tauntaun unicorn usb waterCan wineGlass */
/* exported makeTrio */
'use strict';

// let imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck,
//     dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
    
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// and Marty during Class 4!
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// function makeTrio() {
//     for(let i = 0; i < 3; i++) {
//         let index = getRandomIndex(imageArray.length);
//         let source = imageArray[index].source;
//         let list = document.getElementById('image-list');
//         let listItem = document.createElement('li');
//         let imageItem = document.createElement('img');

//         imageArray[index].viewCount++;
//         imageArray.splice(index, 1);
//         imageItem.setAttribute('src', source);
//         imageItem.setAttribute('id', 'image-' + i);
//         listItem.appendChild(imageItem);
//         list.appendChild(listItem);
//     }
// }

// function checkClick() {
//     console.log('yay! Clicked!');
//     makeTrio();
// }


// makeTrio();

// let threeImages = document.querySelectorAll('img');
// for(let i = 0; i < threeImages.length; i++) {
//     threeImages[i].addEventListener('click', checkClick);
// }

// imageList.appendChild()

let imageList = document.getElementById('image-list');
let maxGuesses = 0;
drawPictures();

function drawPictures() {
    let imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck,
        dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

    for(let i = 0; i < 3; i++) {
        let index = getRandomIndex(imageArray.length);
        imageArray[index].render(imageList);
        imageArray.splice(index, 1);
    }

    let threeImages = document.querySelectorAll('img');
    for(let j = 0; j < threeImages.length; j++) {
        threeImages[j].addEventListener('click', checkClick);
    }
}

function checkClick() {
    maxGuesses++;
    if(maxGuesses > 24) {
        console.log('stop!');
    }
    else {
        while(imageList.lastElementChild) {
            imageList.lastElementChild.remove();
        }
        drawPictures();
    }
}