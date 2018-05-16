/* globals */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.items = allItems;
    }

    render(){
        const dom = appTemplate.content;

        const pictureSection = dom.getElementById('pictures');

        dom.appendChild(pictureSection);
        
        return dom;
    }

}



function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomNumber(5));

// var t = document.querySelector('foothold-element');
// var clone = document.importNode(t.content, true)

// function updateItems(){
//     for(var i = 0; i < 3; i++){
//         let generatedImage = fullItemList[getRandomNumber(fullItemList.length)].render();
//         imageHolder.update(generatedImage);
//     }
// }
// function acquireItems(){
//     for(var i = 0; i < 3; i++){
//         let generatedImage = fullItemList[getRandomNumber(fullItemList.length)].render();
//         imageHolder.appendChild(generatedImage);
//     }
// }

// acquireItems();