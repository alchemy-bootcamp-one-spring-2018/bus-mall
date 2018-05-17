/* exported PictureObject, pictures, clearPicturesData */

const picturesData = window.localStorage.getItem('pictures');

window.onbeforeunload = () => {
    window.localStorage.setItem('channels', JSON.stringify(pictures));
};

let pictures;
if(picturesData) {
    pictures = JSON.parse(picturesData);
}
else {
    initPictures();
}

function initPictures() {
    class PictureObject {
        constructor(name, source, viewCount, selectCount) {
            this.name = name;
            this.source = source;
            this.viewCount = viewCount;
            this.selectCount = selectCount;
        }
    }
    let bag = new PictureObject('bag', '/img/bag.jpg', 0, 0);
    let banana = new PictureObject('banana', '/img/banana.jpg', 0, 0);
    let bathroom = new PictureObject('bathroom', '/img/bathroom.jpg', 0, 0);
    let boots = new PictureObject('boots', '/img/boots.jpg', 0, 0);
    let breakfast = new PictureObject('breakfast', '/img/breakfast.jpg', 0, 0);
    let bubblegum = new PictureObject('bubblegum', '/img/bubblegum.jpg', 0, 0);
    let chair = new PictureObject('chair', '/img/chair.jpg', 0, 0);
    let cthulhu = new PictureObject('cthulhu', '/img/cthulhu.jpg', 0, 0);
    let dogDuck = new PictureObject('dogDuck', '/img/dog-duck.jpg', 0, 0);
    let dragon = new PictureObject('dragon', '/img/dragon.jpg', 0, 0);
    let pen = new PictureObject('pen', '/img/pen.jpg', 0, 0);
    let petSweep = new PictureObject('petSweep', '/img/pet-sweep.jpg', 0, 0);
    let scissors = new PictureObject('scissors', '/img/scissors.jpg', 0, 0);
    let shark = new PictureObject('shark', '/img/shark.jpg', 0, 0);
    let sweep = new PictureObject('sweep', '/img/sweep.png', 0, 0);
    let tauntaun = new PictureObject('tauntaun', '/img/tauntaun.jpg', 0, 0);
    let unicorn = new PictureObject('unicorn', '/img/unicorn.jpg', 0, 0);
    let usb = new PictureObject('usb', '/img/usb.gif', 0, 0);
    let waterCan = new PictureObject('waterCan', '/img/water-can.jpg', 0, 0);
    let wineGlass = new PictureObject('wineGlass', '/img/wine-glass.jpg', 0, 0);

    pictures = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck,
        dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
}

function clearPicturesData() {
    window.localStorage.clear('pictures');
    initPictures();
}