/* exported images */
class ImageRecord {

    constructor(productName, imageName) {
        this.productName = productName;
        this.imageName = imageName;
        this.timesPresented = 0;
        this.timesChosen = 0;
    }

}

const images = [
    new ImageRecord ('R2 Luggage', 'bag.jpg'),
    new ImageRecord ('Banana Slicer', 'banana.jpg'),
    new ImageRecord ('iPad Holder', 'bathroom.jpg'),
    new ImageRecord ('Toeless Boots', 'boots.jpg'),
    new ImageRecord ('Mini Kitchen', 'breakfast.jpg'),
    new ImageRecord ('Meatball Gum', 'bubblegum.jpg'),
    new ImageRecord ('Strange Chair', 'chair.jpg'),
    new ImageRecord ('Cthulhu Monster', 'cthulhu.jpg'),
    new ImageRecord ('Doggie Duck Bill', 'dog-duck.jpg'),
    new ImageRecord ('Dragon Meat', 'dragon.jpg'),
    new ImageRecord ('Flatwear Pens', 'pen.jpg'),
    new ImageRecord ('Pet Sweep', 'pet-sweep.jpg'),
    new ImageRecord ('Pizza Scissors', 'scissors.jpg'),
    new ImageRecord ('Shark Sleeping Bag', 'shark.jpg'),
    new ImageRecord ('Baby Sweeper', 'sweep.png'),
    new ImageRecord ('Tauntaun Sleeping Bag', 'tauntaun.jpg'),
    new ImageRecord ('Unicorn Meat', 'unicorn.jpg'),
    new ImageRecord ('USB Tentacle', 'usb.gif'),
    new ImageRecord ('Escher\'s Watering Can', 'water-can.jpg'),
    new ImageRecord ('Challenging Wine Glass', 'wine-glass.jpg')
];