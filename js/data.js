/* exported images */

class ImageRecord {

    constructor(imageName) {
        this.imageName = imageName;
        this.timesPresented = 0;
        this.timesChosen = 0;
    }

    render(rootElement) {
        this.timesPresented++;
        let newImage = document.createElement('img');
        newImage.src = 'img/' + this.imageName;
        newImage.style.height = '200px';
        newImage.classList.add('pic');
        rootElement.appendChild (newImage);
        newImage.addEventListener('click', () => {
            this.timesChosen++;
        });
    }

    reportResults(rootElement) {
        let newParagraph = document.createElement('p');
        newParagraph.textContent = 'Image ' + this.imageName + ' presented ' + this.timesPresented + ' time(s), chosen ' + this.timesChosen + ' times.';
        rootElement.appendChild (newParagraph);
    }

}

const images = [
    new ImageRecord ('bag.jpg'),
    new ImageRecord ('banana.jpg'),
    new ImageRecord ('bathroom.jpg'),
    new ImageRecord ('boots.jpg'),
    new ImageRecord ('breakfast.jpg'),
    new ImageRecord ('bubblegum.jpg'),
    new ImageRecord ('chair.jpg'),
    new ImageRecord ('cthulhu.jpg'),
    new ImageRecord ('dog-duck.jpg'),
    new ImageRecord ('dragon.jpg'),
    new ImageRecord ('pen.jpg'),
    new ImageRecord ('pet-sweep.jpg'),
    new ImageRecord ('scissors.jpg'),
    new ImageRecord ('shark.jpg'),
    new ImageRecord ('sweep.png'),
    new ImageRecord ('tauntaun.jpg'),
    new ImageRecord ('unicorn.jpg'),
    new ImageRecord ('usb.gif'),
    new ImageRecord ('water-can.jpg'),
    new ImageRecord ('wine-glass.jpg')
];