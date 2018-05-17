/* exported products */
class Product {

    constructor(productName, imageName) {
        this.productName = productName;
        this.imageName = imageName;
        this.timesPresented = 0;
        this.timesChosen = 0;
    }

}

const products = [
    new Product ('R2 Luggage', 'bag.jpg'),
    new Product ('Banana Slicer', 'banana.jpg'),
    new Product ('iPad Holder', 'bathroom.jpg'),
    new Product ('Toeless Boots', 'boots.jpg'),
    new Product ('Mini Kitchen', 'breakfast.jpg'),
    new Product ('Meatball Gum', 'bubblegum.jpg'),
    new Product ('Strange Chair', 'chair.jpg'),
    new Product ('Cthulhu Monster', 'cthulhu.jpg'),
    new Product ('Doggie Duck Bill', 'dog-duck.jpg'),
    new Product ('Dragon Meat', 'dragon.jpg'),
    new Product ('Flatwear Pens', 'pen.jpg'),
    new Product ('Pet Sweep', 'pet-sweep.jpg'),
    new Product ('Pizza Scissors', 'scissors.jpg'),
    new Product ('Shark Sleeping Bag', 'shark.jpg'),
    new Product ('Baby Sweeper', 'sweep.png'),
    new Product ('Tauntaun Sleeping Bag', 'tauntaun.jpg'),
    new Product ('Unicorn Meat', 'unicorn.jpg'),
    new Product ('USB Tentacle', 'usb.gif'),
    new Product ('Escher\'s Watering Can', 'water-can.jpg'),
    new Product ('Challenging Wine Glass', 'wine-glass.jpg')
];