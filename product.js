/* globals render() */
/* exported images render() dom Prod */
'use strict';



class ImageDisplay {
    constructor(path, name) {
        this.path = path;
        this.name = name;
        this.viewCount = 0;
        this.voteCount = 0;
    }
}

//****YOU NEED MORE ITEMS HERE!!!
let bag = new ImageDisplay('img/bag.jpg', 'bag');
let banana = new ImageDisplay('img/banana.jpg', 'banana');
let bathroom = new ImageDisplay('img/bathroom.jpg', 'bathroom');
let boots = new ImageDisplay('img/boots.jpg', 'boots');
let breakfast = new ImageDisplay('img/breakfast.jpg', 'breakfast');
let bubblegum = new ImageDisplay('img/bubblegum.jpg', 'bubblegum');
let chair = new ImageDisplay('img/chair.jpg', 'chair');
let cthulhu = new ImageDisplay('img/cthulhu.jpg', 'cthulhu');
let dogduck = new ImageDisplay('img/dogduck.jpg', 'dogduck');
let dragon = new ImageDisplay('img/dragon.jpg', 'dragon');
let pen = new ImageDisplay('img/pen.jpg', 'pen');
let petsweep = new ImageDisplay('img/petsweep.jpg', 'petsweep');
const images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep];