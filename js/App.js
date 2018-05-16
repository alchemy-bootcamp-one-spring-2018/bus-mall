/* globals Choice, Result, productList*/
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = productList;
        this.votes = 0;
        this.lastArray = [];
    }

    showResults() {
        const resultComponent = new Result(this.list);
        this.resultSection.appendChild(resultComponent.render());
        while(this.choiceSection.lastElementChild) {
            this.choiceSection.lastElementChild.remove();
        }
    }

    render() {
        const dom = appTemplate.content;
        this.choiceSection = dom.getElementById('choice');
        this.resultSection = dom.getElementById('result');

        const imagesArray = this.randomThreeObjects(this.list.length);

        const choiceComponent = new Choice(imagesArray, (product) => {
            product.clicks++;
            this.votes++;
            const imagesArray = this.randomThreeObjects(this.list.length);
            choiceComponent.update(imagesArray);
            if(this.votes === 25) {
                this.showResults();
            }
        });
        this.choiceSection.appendChild(choiceComponent.render());

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