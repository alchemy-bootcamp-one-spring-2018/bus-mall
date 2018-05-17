class ItemToShow {
    constructor(name, image, votes){
        this.name = name;
        this.image = image;
        this.votes = votes;
    }
}


const bag = new ItemToShow('bag', 'assets/bag.jpg', 0);
const banana = new ItemToShow('banana', 'assets/banana.jpg', 0);
const bathroom = new ItemToShow('bathroom', 'assets/bathroom.jpg', 0);
const boots = new ItemToShow('boots', 'assets/boots.jpg', 0);
const breakfast = new ItemToShow('breakfast', 'assets/breakfast.jpg', 0);
const bubblegum = new ItemToShow('bubblegum', 'assets/bubblegum.jpg', 0);
const chair = new ItemToShow('chair', 'assets/chair.jpg', 0);
const cthulhu = new ItemToShow('cthulhu', 'assets/cthulhu.jpg', 0);
const dogDuck = new ItemToShow('dog-duck', 'assets/dog-duck.jpg', 0);
const dragon = new ItemToShow('dragon', 'assets/dragon.jpg', 0);
const pen = new ItemToShow('pen', 'assets/pen.jpg', 0);
const petSweep = new ItemToShow('pet-sweep', 'assets/pet-sweep.jpg', 0);
const scissors = new ItemToShow('scissors', 'assets/scissors.jpg', 0);
const shark = new ItemToShow('shark', 'assets/shark.jpg', 0);
const sweep = new ItemToShow('sweep', 'assets/sweep.png', 0);
const tauntaun = new ItemToShow('tauntaun', 'assets/tauntaun.jpg', 0);
const unicorn = new ItemToShow('unicorn', 'assets/unicorn.jpg', 0);
const usb = new ItemToShow('usb', 'assets/usb.gif', 0);
const waterCan = new ItemToShow('water-can', 'assets/water-can.jpg', 0);
const wineGlass = new ItemToShow('wine-glass', 'assets/wine-glass.jpg', 0);

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