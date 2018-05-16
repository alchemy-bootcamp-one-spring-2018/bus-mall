/* exported productList */

class Product {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.views = 0;
        this.count = 0;
    }
}

const bag = new Product('Star Wars Bag', './assets/bag.jpg');
const banana = new Product('Banana Cutter', './assets/banana.jpg');
const bathroom = new Product('Toilet Companion', './assets/bathroom.jpg');
const boots = new Product('Cold Toes', './assets/boots.jpg');
const breakfast = new Product('Simply Amazing', './assets/breakfast.jpg');
const bubblegum = new Product('Meat Gum', './assets/bubblegum.jpg');
const chair = new Product('Hip Chair', './assets/chair.jpg');
const cthulhu = new Product('Green Monster', './assets/cthulhu.jpg');
const dogDuck = new Product('Quak-quak', './assets/dog-duck.jpg');
const dragon = new Product('Dragon Meat', './assets/dragon.jpg');
const pen = new Product('Pen', './assets/pen.jpg');
const petSweep = new Product('Pet Sweep', './assets/pet-sweep.jpg');
const scissors = new Product('Scissor', './assets/scissors.jpg');
const shark = new Product('Shark', './assets/shark.jpg');
const tauntaun = new Product('Tauntaun', './assets/tauntaun.jpg');
const unicorn = new Product('Unicorn', './assets/unicorn.jpg');
const usb = new Product('USB', './assets/usb.gif');
const waterCan = new Product('Water Can', './assets/water-can.jpg');
const wineGlass = new Product('Wine Glass', './assets/wine-glass.jpg');

const productList = [bag, banana, bathroom, boots, breakfast, bubblegum, chair,
    cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn,
    usb, waterCan, wineGlass
];






