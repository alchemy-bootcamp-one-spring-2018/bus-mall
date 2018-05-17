/* exported itemArray */

class Item {
    constructor(name, image){
        this.name = name;
        this.image = image;
        this.views = 0;
        this.clicks = 0;
    }

}

let bag = new Item('Bag', './assets/bag.jpg');
let banana = new Item('Banana', './assets/banana.jpg');
let bathroom = new Item('Bathroom', './assets/bathroom.jpg');
let boots = new Item('Boots', './assets/boots.jpg');
let breakfast = new Item('Breakfast', './assets/breakfast.jpg');
let bubblegum = new Item('Bubblegum', './assets/bubblegum.jpg');
let chair = new Item('Chair', './assets/chair.jpg');
let cthulhu = new Item('Cthulhu', './assets/cthulhu.jpg');
let dogDuck = new Item('Dog-duck', './assets/dog-duck.jpg');
let dragon = new Item('Dragon', './assets/dragon.jpg');
let pen = new Item('Pen', './assets/pen.jpg');
let petSweep = new Item('Pet-Sweep', './assets/pet-sweep.jpg');
let scissors = new Item('Scissors', './assets/scissors.jpg');
let shark = new Item('Shark', './assets/shark.jpg');
let sweep = new Item('Sweep', './assets/sweep.png');
let tauntaun = new Item('Tauntaun', './assets/tauntaun.jpg');
let unicorn = new Item('Unicorn', './assets/unicorn.jpg');
let usb = new Item('USB', './assets/usb.gif');
let waterCan = new Item('Water-can', './assets/water-can.jpg');
let wineGlass = new Item('Wine-glass', './assets/wine-glass.jpg');

let itemArray = [
    bag,
    banana,
    bathroom,
    boots,
    breakfast,
    bubblegum,
    chair,
    cthulhu,
    dogDuck,
    dragon,
    pen,
    petSweep,
    scissors,
    shark,
    sweep,
    tauntaun,
    unicorn,
    usb,
    waterCan,
    wineGlass
];
