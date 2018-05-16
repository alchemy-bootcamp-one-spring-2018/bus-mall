class ItemToShow {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}


const bag = new ItemToShow('bag', 'assets/bag.jpg');
const banana = new ItemToShow('banana', 'assets/banana.jpg');
const bathroom = new ItemToShow('bathroom', 'assets/bathroom.jpg');
const boots = new ItemToShow('boots', 'assets/boots.jpg');
const breakfast = new ItemToShow('breakfast', 'assets/breakfast.jpg');
const bubblegum = new ItemToShow('bubblegum', 'assets/bubblegum.jpg');
const chair = new ItemToShow('chair', 'assets/chair.jpg');
const cthulhu = new ItemToShow('cthulhu', 'assets/cthulhu.jpg');
const dogDuck = new ItemToShow('dog-duck', 'assets/dog-duck.jpg');
const dragon = new ItemToShow('dragon', 'assets/dragon.jpg');
const pen = new ItemToShow('pen', 'assets/pen.jpg');
const petSweep = new ItemToShow('pet-sweep', 'assets/pet-sweep.jpg');
const scissors = new ItemToShow('scissors', 'assets/scissors.jpg');
const shark = new ItemToShow('shark', 'assets/shark.jpg');
const sweep = new ItemToShow('sweep', 'assets/sweep.png');
const tauntaun = new ItemToShow('tauntaun', 'assets/tauntaun.jpg');
const unicorn = new ItemToShow('unicorn', 'assets/unicorn.jpg');
const usb = new ItemToShow('usb', 'assets/usb.gif');
const waterCan = new ItemToShow('water-can', 'assets/water-can.jpg');
const wineGlass = new ItemToShow('wine-glass', 'assets/wine-glass.jpg');

let items = [bag, banana, bathroom, boots, breakfast, bubblegum,
    chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep,
    tauntaun, unicorn, usb, waterCan, wineGlass];



// const allItems = [{
//     name: 'bag',
//     image: 'assets/bag.jpg'
// }, {
//     name: 'banana',
//     image: 'assets/banana.jpg'
// }, {
//     name: 'bathroom',
//     image: 'assets/bathroom.jpg'
// }, {
//     name: 'boots',
//     image: 'assets/boots.jpg'
// }, {
//     name: 'breakfast',
//     image: 'assets/breakfast.jpg'
// }, {
//     name: 'bubblegum',
//     image: 'assets/bubblegum.jpg'
// }, {
//     name: 'chair',
//     image: 'assets/chair.jpg'
// },

// ];
// /* globals fullItemList */


//     // update(){
//     //     const div = this.div;
//     //     while(div.lastElementChild){
//     //         div.lastElementChild.remove();
//     //     }
//     // }

//     render(){
//         let article = document.createElement('div');
//         article.textContent = this.name;

//         let picture = document.createElement('img');
//         picture.setAttribute('src', this.image);
//         article.appendChild(picture);

//         return article;

//     }
// }

// console.log(fullItemList);