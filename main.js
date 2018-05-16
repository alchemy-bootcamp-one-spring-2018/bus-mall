/* globals Picture vote random */
/* exported pictureArray */
// LISTENER FOR SUBMIT
document.getElementById('submit').addEventListener('click', vote);

// GLOBAL VARIABLE(S)
let pictureArray = [];
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

    pictureArray = [Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, DogDuck, Dragon, Pen, PetSweep, Scissors, Shark, Sweep, Tauntaun, Unicorn, USB, WaterCan, WineGlass];
}

setObjects();
random();
