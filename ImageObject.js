/* exported ImageObject bag banana bathroom boots breakfast bubblegum chair cthulhu dogDuck
dragon pen petSweep scissors shark sweep tauntaun unicorn usb waterCan wineGlass */
'use strict';

class ImageObject {
    constructor(name, source, viewCount, selectCount) {
        this.name = name;
        this.source = source;
        this.viewCount = viewCount;
        this.selectCount = selectCount;
    }

    render(parent) {
        this.viewCount++;
        // let imageList = document.getElementById('image-list');
        let newImage = document.createElement('img');
        newImage.setAttribute('src', this.source);
        parent.appendChild(newImage);
        newImage.addEventListener('click', () => {
            this.selectCount++;
        });
    }

    print(parent) {
        let viewNumber = document.createElement('p');
        viewNumber.textContent = this.viewCount;
        let selectNumber = document.createElement('p');
        selectNumber.textContent = this.selectCount;
        parent.appendChild(viewNumber);
        parent.appendChild(selectNumber);
    }
}

let bag = new ImageObject('bag', '/img/bag.jpg', 0, 0);
let banana = new ImageObject('banana', '/img/banana.jpg', 0, 0);
let bathroom = new ImageObject('bathroom', '/img/bathroom.jpg', 0, 0);
let boots = new ImageObject('boots', '/img/boots.jpg', 0, 0);
let breakfast = new ImageObject('breakfast', '/img/breakfast.jpg', 0, 0);
let bubblegum = new ImageObject('bubblegum', '/img/bubblegum.jpg', 0, 0);
let chair = new ImageObject('chair', '/img/chair.jpg', 0, 0);
let cthulhu = new ImageObject('cthulhu', '/img/cthulhu.jpg', 0, 0);
let dogDuck = new ImageObject('dogDuck', '/img/dog-duck.jpg', 0, 0);
let dragon = new ImageObject('dragon', '/img/dragon.jpg', 0, 0);
let pen = new ImageObject('pen', '/img/pen.jpg', 0, 0);
let petSweep = new ImageObject('petSweep', '/img/pet-sweep.jpg', 0, 0);
let scissors = new ImageObject('scissors', '/img/scissors.jpg', 0, 0);
let shark = new ImageObject('shark', '/img/shark.jpg', 0, 0);
let sweep = new ImageObject('sweep', '/img/sweep.png', 0, 0);
let tauntaun = new ImageObject('tauntaun', '/img/tauntaun.jpg', 0, 0);
let unicorn = new ImageObject('unicorn', '/img/unicorn.jpg', 0, 0);
let usb = new ImageObject('usb', '/img/usb.gif', 0, 0);
let waterCan = new ImageObject('waterCan', '/img/water-can.jpg', 0, 0);
let wineGlass = new ImageObject('wineGlass', '/img/wine-glass.jpg', 0, 0);