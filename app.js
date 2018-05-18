'use strict';
/* exportedProduct */
const appTemplate = document.getElementById('app-template');

let arrayOfProducts;


startInfo();

function startInfo() {
    class Product {
        constructor(name, image, count) {
            this.name = name;
            this.image = image;
            this.count = count;
        }
    }
    let bag = new Product('bag', 'images/bag.jpg', 0);
    let banana = new Product('banana', 'images/banana.jpg', 0);
    let bathroom = new Product('bathroom', 'images/bathroom.jpg', 0);
    let boots = new Product('boots', 'images/boots.jpg', 0);
    let breakfast = new Product('breakfast', 'images/breakfast.jpg', 0);
    let bubblegum = new Product('bubblegum', 'images/bubblegum.jpg', 0);    
    let chair = new Product('chair', 'images/chair.jpg', 0);   
    let cthulhu = new Product('cthulhu', 'images/cthulhu.jpg', 0);    
    let dogDuck = new Product('dog duck', 'images/dog-duck.jpg', 0);     
    let dragon = new Product('dragon', 'images/dragon.jpg', 0);
    let pen = new Product('pen', 'images/pen.jpg', 0);
    let petSweep = new Product('pet sweep', 'images/pet-sweep.jpg', 0);
    let scissors = new Product('scissors', 'images/scissors.jpg', 0);
    let shark = new Product('shark', 'images/shark.png', 0);
    let sweep = new Product('sweep', 'images/sweep.png', 0);
    let tauntaun = new Product('tauntaun', 'images/tauntaun.jpg', 0);
    let unicorn = new Product('unicorn', 'images/unicorn.jpg', 0);
    let usb = new Product('usb', 'images/usb.gif', 0);
    let waterCan = new Product('water can', 'images/water-can.jpg', 0);
    let wineGlass = new Product('wine glass', 'images/wine-glass.jpg', 0);


    arrayOfProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
}

// render() {
//     const dom = appTemplate.content;
//     return dom;

// }