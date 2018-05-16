/* exported objectArray */
/* globals  */
class ImageObjects {
    constructor(name, img){
        this.name = name;
        this.views = 0;
        this.clicks = 0;
        this.imgSrc = img;
    }
}
let bag = new ImageObjects('Bag', 'assets/bag.jpg');
let banana = new ImageObjects('Banana', 'assets/banana.jpg');
let bathroom = new ImageObjects('Bathroom', 'assets/bathroom.jpg');
let boots = new ImageObjects('Boots', 'assets/boots.jpg');
let breakfast = new ImageObjects('Breakfast', 'assets/breakfast.jpg');
let bubblegum = new ImageObjects('Bubblegum', 'assets/bubblegum.jpg');
let chair = new ImageObjects('Chair', 'assets/chair.jpg');
let cthulhu = new ImageObjects('Cthulhu', 'assets/cthulhu.jpg');
let dogDuck = new ImageObjects('Dog-Duck', 'assets/dog-duck.jpg');
let dragon = new ImageObjects('Dragon', 'assets/dragon.jpg');
let pen = new ImageObjects('Pen', 'assets/pen.jpg');
let petSweep = new ImageObjects('Pet-Sweep', 'assets/pet-sweep.jpg');
let scissors = new ImageObjects('Scissors', 'assets/scissors.jpg');
let shark = new ImageObjects('Shark', 'assets/shark.jpg');
let sweep = new ImageObjects('Sweep', 'assets/sweep.png');
let tauntaun = new ImageObjects('Tauntaun', 'assets/tauntaun.jpg');
let unicorn = new ImageObjects('Unicorn', 'assets/unicorn.jpg');
let usb = new ImageObjects('USB', 'assets/usb.gif');
let waterCan = new ImageObjects('Water-Can', 'assets/water-can.jpg');
let wineGlass = new ImageObjects('Wine-Glass', 'assets/wine-glass.jpg');

let objectArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
