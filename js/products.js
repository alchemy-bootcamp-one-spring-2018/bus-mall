/* exported productArray clearProductsArray */

const productData = window.localStorage.getItem('productArray');

window.onbeforeunload = () => {
    window.localStorage.setItem('productArray', JSON.stringify(productArray));
};


let productArray;
if(productData) {
    productArray = JSON.parse(productData);
}
else {
    clearProducts();
}

function clearProducts() {
    class Product {
        constructor(name, image) {
            this.name = name;
            this.image = image;
            this.views = 0;
            this.clicks = 0;
        }

    }

    let bag = new Product('Bag', './assets/bag.jpg');
    let banana = new Product('Banana', './assets/banana.jpg');
    let bathroom = new Product('Bathroom', './assets/bathroom.jpg');
    let boots = new Product('Boots', './assets/boots.jpg');
    let breakfast = new Product('Breakfast', './assets/breakfast.jpg');
    let bubblegum = new Product('Bubblegum', './assets/bubblegum.jpg');
    let chair = new Product('Chair', './assets/chair.jpg');
    let cthulhu = new Product('Cthulhu', './assets/cthulhu.jpg');
    let dogDuck = new Product('Dog-duck', './assets/dog-duck.jpg');
    let dragon = new Product('Dragon', './assets/dragon.jpg');
    let pen = new Product('Pen', './assets/pen.jpg');
    let petSweep = new Product('Pet-Sweep', './assets/pet-sweep.jpg');
    let scissors = new Product('Scissors', './assets/scissors.jpg');
    let shark = new Product('Shark', './assets/shark.jpg');
    let sweep = new Product('Sweep', './assets/sweep.png');
    let tauntaun = new Product('Tauntaun', './assets/tauntaun.jpg');
    let unicorn = new Product('Unicorn', './assets/unicorn.jpg');
    let usb = new Product('USB', './assets/usb.gif');
    let waterCan = new Product('Water-can', './assets/water-can.jpg');
    let wineGlass = new Product('Wine-glass', './assets/wine-glass.jpg');

    productArray = [
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
}

function clearProductsArray() {
    window.localStorage.clear('products');
    clearProducts();
}