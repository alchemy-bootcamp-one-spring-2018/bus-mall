'use strict';
const appTemplate = document.getElementById('app-template');


class Product {
    constructor(name, image, count) {
        this.name = name;
        this.image = image;
        this.count = count;
    }
}

var bag = new Product('bag', 'images/bag.jpg', 0);
var banana = new Product('banana', 'images/banana.jpg', 0);
var bathroom = new Product('bathroom', 'images/bathroom.jpg', 0);
var boots = new Product('boots', 'images/boots.jpg', 0);
var breakfast = new Product('breakfast', 'images/breakfast.jpg', 0);
var bubblegum = new Product('bubblegum', 'images/bubblegum.jpg', 0);    
var chair = new Product('chair', 'images/chair.jpg', 0);   
var cthulhu = new Product('cthulhu', 'images/cthulhu.jpg', 0);    
var dogDuck = new Product('dog duck', 'images/dog-duck.jpg', 0);     
var dragon = new Product('dragon', 'images/dragon.jpg', 0);
var pen = new Product('pen', 'images/pen.jpg', 0);
var petSweep = new Product('pet sweep', 'images/pet-sweep.jpg', 0);
var scissors = new Product('scissors', 'images/scissors.jpg', 0);
var shark = new Product('shark', 'images/shark.png', 0);
var sweep = new Product('sweep', 'images/sweep.png', 0);
var tauntaun = new Product('tauntaun', 'images/tauntaun.jpg', 0);
var unicorn = new Product('unicorn', 'images/unicorn.jpg', 0);
var usb = new Product('usb', 'images/usb.gif', 0);
var waterCan = new Product('water can', 'images/water-can.jpg', 0);
var wineGlass = new Product('wine glass', 'images/wine-glass.jpg', 0);


var arrayOfProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];


render() {
    const dom = appTemplate.content;

    return dom;

}