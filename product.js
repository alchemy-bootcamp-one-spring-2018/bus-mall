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
let bag = new ImageDisplay('./img/bag.jpg', 'bag');
let banana = new ImageDisplay('banana.jpg', 'banana');
let bathroom = new ImageDisplay('bathroom.jpg', 'bathroom');
let boots = new ImageDisplay('boots.jpg', 'boots');
let breakfast = new ImageDisplay('breakfast.jpg', 'breakfast');
let bubblegum = new ImageDisplay('bubblegum.jpg', 'bubblegum');
let chair = new ImageDisplay('chair.jpg', 'chair');
let cthulhu = new ImageDisplay('cthulhu.jpg', 'cthulhu');
let dogduck = new ImageDisplay('dogduck.jpg', 'dogduck');
let dragon = new ImageDisplay('dragon.jpg', 'dragon');
let pen = new ImageDisplay('pen.jpg', 'pen');
let petsweep = new ImageDisplay('petsweep.jpg', 'petsweep');
const images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep];