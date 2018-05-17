'use strict';
/* globals */
/* exported imageArray */


class Image {
    
    constructor(name, imageURL) {
        
        this.name = name;
        this.imageURL = imageURL;
        this.timesVoted = 0;
        this.timesShown = 0;
    }
}

const imageArray = [
    new Image('Bag', 'img/bag.jpg'),
    new Image('Banana', 'img/banana.jpg'),
    new Image('Bathroom', 'img/bathroom.jpg'),
    new Image('Boots', 'img/boots.jpg'),
    new Image('Breakfast', 'img/breakfast.jpg'),
    new Image('Bubblegum', 'img/bubblegum.jpg'),
    new Image('Chair', 'img/chair.jpg'),
    new Image('Cthulhu', 'img/cthulhu.jpg'),
    new Image('Dog-Duck', 'img/dog-duck.jpg'),
    new Image('Dragon', 'img/dragon.jpg'),
    new Image('Pen', 'img/pen.jpg'),
    new Image('Pet-Sweep', 'img/pet-sweep.jpg'),
    new Image('Scissors', 'img/scissors.jpg'),
    new Image('Shark', 'img/shark.jpg'),
    new Image('Sweep', 'img/sweep.png'),
    new Image('TaunTaun', 'img/tauntaun.jpg'),
    new Image('Unicorn', 'img/unicorn.jpg'),
    new Image('USB', 'img/usb.gif'),
    new Image('Water Can', 'img/water-can.jpg'),
    new Image('Wine Glass', 'img/wine-glass.jpg')
];

