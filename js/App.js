/* globals Choice, Result, productList*/
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        
    }

    render() {
        const dom = appTemplate.content;

        const choiceSection = dom.getElementById('choice');

        const imageIndexes = threeRandomInts(productList.length);
        console.log(imageIndexes, 'random ints from product list length');


        const image0 = productList[imageIndexes[0]].image;
        const image1 = productList[imageIndexes[1]].image;
        const image2 = productList[imageIndexes[2]].image;


        const choiceComponent = new Choice(image0, image1, image2);
        choiceSection.appendChild(choiceComponent.render());

        const resultSection = dom.getElementById('result');
        const resultComponent = new Result(productList);
        resultSection.appendChild(resultComponent.render());
        
        return dom;
    }

}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function threeRandomInts(max) {
    let arrayOfThreeInts = [];
    for(let i = 0; i < 3; i++) {
        arrayOfThreeInts[i] = randomInt(max);
    }
    return arrayOfThreeInts;
}