/* globals Choice, Result, productList*/
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = productList;
        this.votes = 24;
        this.lastArray = [];
    }

    showResults() {
        const dom = appTemplate.content;
        const resultSection = dom.getElementById('result');
        const resultComponent = new Result(this.list);
        resultSection.appendChild(resultComponent.render());

    }

    render() {
        const dom = appTemplate.content;
        const choiceSection = dom.getElementById('choice');
        
        const imagesArray = this.randomThreeObjects(this.list.length);

        const choiceComponent = new Choice(imagesArray, (product) => {
            product.clicks++;
            this.votes++;
            choiceComponent.update([bag, bag, bag]);
            if(this.votes === 25) {
                this.showResults();
            }
        });
        choiceSection.appendChild(choiceComponent.render());

 
        return dom;
    }

    randomThreeObjects(max) {
        let indexArray = [];
        let objectArray = [];
        for(let i = 0; i < 3;) {
            let int = randomInt(max);
            if(this.lastArray.includes(int) === false && indexArray.includes(int) === false) {
                indexArray[i] = int;
                this.list[int].views++;
                objectArray[i] = this.list[int];
                i++;
            }
        }
        this.lastArray = indexArray;

        return objectArray;
    }

}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}