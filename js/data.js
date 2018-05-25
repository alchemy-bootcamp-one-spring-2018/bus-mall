/* exported products, clearProductData */

class Product {

    constructor(productName, imageName, chartColor) {
        this.productName = productName;
        this.imageName = imageName;
        this.chartColor = chartColor;
        this.timesPresented = 0;
        this.timesChosen = 0;
    }

}

const productsData = window.localStorage.getItem('products');

window.onbeforeunload = () => {
    window.localStorage.setItem('products', JSON.stringify(products));
};

let products;
if(productsData === 'undefined' || !productsData) {
    initializeProducts();
}
else {
    products = JSON.parse(productsData);
}


function initializeProducts() {

    products = [
        new Product ('R2 Luggage', 'bag.jpg', 'red'),
        new Product ('Banana Slicer', 'banana.jpg', 'green'),
        new Product ('iPad Holder', 'bathroom.jpg', 'yellow'),
        new Product ('Toeless Boots', 'boots.jpg', 'blue'),
        new Product ('Mini Kitchen', 'breakfast.jpg', 'chartreuse'),
        new Product ('Meatball Gum', 'bubblegum.jpg', 'cyan'),
        new Product ('Strange Chair', 'chair.jpg', 'orange'),
        new Product ('Cthulhu Monster', 'cthulhu.jpg', 'pink'),
        new Product ('Doggie Duck Bill', 'dog-duck.jpg', 'purple'),
        new Product ('Dragon Meat', 'dragon.jpg', 'darkOrchid'),
        new Product ('Flatware Pens', 'pen.jpg', 'darkSalmon'),
        new Product ('Pet Sweep', 'pet-sweep.jpg', 'darkSeaGreen'),
        new Product ('Pizza Scissors', 'scissors.jpg', 'deepPink'),
        new Product ('Shark Sleeping Bag', 'shark.jpg', 'goldenRod'),
        new Product ('Baby Sweeper', 'sweep.png', 'indigo'),
        new Product ('Tauntaun Sleeping Bag', 'tauntaun.jpg', 'lightCyan'),
        new Product ('Unicorn Meat', 'unicorn.jpg', 'indianRed'),
        new Product ('USB Tentacle', 'usb.gif', 'lightSteelBlue'),
        new Product ('Escher\'s Watering Can', 'water-can.jpg', 'oliveDrab'),
        new Product ('Challenging Wine Glass', 'wine-glass.jpg', 'paleVioletRed')
    ];

}

function clearProductData() {
    window.localStorage.clear('products');
    initializeProducts();
    location.reload(true);
}