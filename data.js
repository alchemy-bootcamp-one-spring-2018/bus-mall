'use strict';
/* exported Image imageArray */


class Image {
    
    constructor(name, imgSource, timesClicked, timesShown) {
        
        this.name = name;
        this.imgSource = imgSource;
        this.timesClicked = timesClicked;
        this.timesShown = timesShown;
    }
}

const imageArray = [
    new Image('Bag', 'img/bag.jpg'),
    new Image('Banana', 'img/banana.jpg'),
    new Image('Bathroom', 'img/bathroom.jpg'),
    new Image('Boots', 'img/boots.jpg'),
    new Image('', 'img/breakfast.jpg'),
    new Image('', 'img/bubblegum.jpg'),
    new Image('', 'img/chair.jpg'),
    new Image('', 'img/cthulhu.jpg'),
    new Image('', 'img/dog-duck.jpg'),
    new Image('', 'img/dragon.jpg'),
    new Image('', 'img/pen.jpg'),
    new Image('', 'img/pet-sweep.jpg'),
    new Image('', 'img/scissors.jpg'),
    new Image('', 'img/shark.jpg'),
    new Image('', 'img/sweep.jpg'),
    new Image('', 'img/tauntaun.jpg'),
    new Image('', 'img/unicorn.jpg'),
    new Image('', 'img/usb.gif'),
    new Image('', 'img/water-can.jpg'),
    new Image('', 'img/wine-glass.jpg'),
];


