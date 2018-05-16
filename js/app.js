/* globals Vote itemArray */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }
    
    render() {
        const dom = appTemplate.content;

        const voteSection = dom.getElementById('vote');

        const imageIndexes = threeRandomItems(itemArray.length);

        const image0 = itemArray[imageIndexes[0]].image;
        const image1 = itemArray[imageIndexes[1]].image;
        const image2 = itemArray[imageIndexes[2]].image;


        const voteComponent = new Vote(image0, image1, image2);
        voteSection.appendChild(voteComponent.render());



        return dom;
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function threeRandomItems(max) {
    let arrayOfThreeItems = [];
    for(let i = 0; i < 3; i++) {
        arrayOfThreeItems[i] = randomInt(max);
    }
    return arrayOfThreeItems;
}