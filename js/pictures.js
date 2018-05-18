/* globals */
/* exported pictures */

class Picture {

    constructor(fileName) {
        this.name = fileName.split('.')[0];
        this.location = './assets/' + fileName;
        this.shown = 0;
        this.votes = 0;
    }
}

let pictures = [];
function setObjects() {
    let Bag = new Picture('Bag.jpg');
    let Banana = new Picture('Banana.jpg');
    let Bathroom = new Picture('Bathroom.jpg');
    let Boots = new Picture('Boots.jpg');
    let Breakfast = new Picture('Breakfast.jpg');
    let Bubblegum = new Picture('Bubblegum.jpg');
    let Chair = new Picture('Chair.jpg');
    let DogDuck = new Picture('Dog-Duck.jpg');
    let Dragon = new Picture('Dragon.jpg');
    let Pen = new Picture('Pen.jpg');
    let PetSweep = new Picture('Pet-Sweep.jpg');
    let Scissors = new Picture('Scissors.jpg');
    let Shark = new Picture('Shark.jpg');
    let Sweep = new Picture('Sweep.png');
    let Tauntaun = new Picture('Tauntaun.jpg');
    let Unicorn = new Picture('Unicorn.jpg');
    let USB = new Picture('USB.gif');
    let WaterCan = new Picture('Water-Can.jpg');
    let WineGlass = new Picture('Wine-Glass.jpg');

    let list = [Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, DogDuck, Dragon, Pen, PetSweep, Scissors, Shark, Sweep, Tauntaun, Unicorn, USB, WaterCan, WineGlass];
    if(localStorage.length !== 0) {
        let resultsList = JSON.parse(localStorage.getItem('resultsList'));
        resultsList.forEach(a => list.forEach((b, i) => {
            if(b.name === a.name) {
                list.splice(i, 1);
            }
        }));

        pictures = list.concat(resultsList);
    }
    else {
        pictures = list;
    }
}
setObjects();