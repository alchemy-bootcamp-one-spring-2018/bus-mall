'use strict';
/* exported imageArray */

class Image {
    
    constructor(name, imgSource, timesClicked, timesShown) {
        
        this.name = name;
        this.imgSource = imgSource;
        this.timesClicked = timesClicked;
        this.timesShown = timesShown;
    }
}

const imageArray = [
    new Image('Bag', 'img/bag.jpg', '0', '0'),
    new Image('Banana', 'img/banana.jpg', '0', '0'),
    new Image('Bathroom', 'img/bathroom.jpg', '0', '0'),
    new Image('Boots', 'img/boots.jpg', '0', '0'),
    new Image('Breakfast', 'img/breakfast.jpg', '0', '0'),
    new Image('Bubblegum', 'img/bubblegum.jpg', '0', '0'),
    new Image('Chair', 'img/chair.jpg', '0', '0'),
    new Image('Cthulhu', 'img/cthulhu.jpg', '0', '0'),
    new Image('Dog-Duck', 'img/dog-duck.jpg', '0', '0'),
    new Image('Dragon', 'img/dragon.jpg', '0', '0'),
    new Image('Pen', 'img/pen.jpg', '0', '0'),
    new Image('Pet-Sweep', 'img/pet-sweep.jpg', '0', '0'),
    new Image('Scissors', 'img/scissors.jpg', '0', '0'),
    new Image('Shark', 'img/shark.jpg', '0', '0'),
    new Image('Sweep', 'img/sweep.jpg', '0', '0'),
    new Image('TaunTaun', 'img/tauntaun.jpg', '0', '0'),
    new Image('Unicorn', 'img/unicorn.jpg', '0', '0'),
    new Image('USB', 'img/usb.gif', '0', '0'),
    new Image('Water Can', 'img/water-can.jpg', '0', '0'),
    new Image('Wine Glass', 'img/wine-glass.jpg', '0', '0')
];


