'use strict';
/* exportedProduct */


let arrayOfProducts;


class ProductToShow {
    constructor(name, image, count) {
        this.name = name;
        this.image = image;
        this.count = count;
    }
}
let bag = new ProductToShow('bag', 'images/bag.jpg', 0);
let banana = new ProductToShow('banana', 'images/banana.jpg', 0);
let bathroom = new ProductToShow('bathroom', 'images/bathroom.jpg', 0);
let boots = new ProductToShow('boots', 'images/boots.jpg', 0);
let breakfast = new ProductToShow('breakfast', 'images/breakfast.jpg', 0);
let bubblegum = new ProductToShow('bubblegum', 'images/bubblegum.jpg', 0);    
let chair = new ProductToShow('chair', 'images/chair.jpg', 0);   
let cthulhu = new ProductToShow('cthulhu', 'images/cthulhu.jpg', 0);    
let dogDuck = new ProductToShow('dog duck', 'images/dog-duck.jpg', 0);     
let dragon = new ProductToShow('dragon', 'images/dragon.jpg', 0);
let pen = new ProductToShow('pen', 'images/pen.jpg', 0);
let petSweep = new ProductToShow('pet sweep', 'images/pet-sweep.jpg', 0);
let scissors = new ProductToShow('scissors', 'images/scissors.jpg', 0);
let shark = new ProductToShow('shark', 'images/shark.png', 0);
let sweep = new ProductToShow('sweep', 'images/sweep.png', 0);
let tauntaun = new ProductToShow('tauntaun', 'images/tauntaun.jpg', 0);
let unicorn = new ProductToShow('unicorn', 'images/unicorn.jpg', 0);
let usb = new ProductToShow('usb', 'images/usb.gif', 0);
let waterCan = new ProductToShow('water can', 'images/water-can.jpg', 0);
let wineGlass = new ProductToShow('wine glass', 'images/wine-glass.jpg', 0);


arrayOfProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

