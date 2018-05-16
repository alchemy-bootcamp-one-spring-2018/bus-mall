/* globals Choice, Result, productList*/
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = productList;
        this.votes = 25;
        this.lastArray = [];
    }

    render() {
        const dom = appTemplate.content;
        const choiceSection = dom.getElementById('choice');
        
        const imageIndices = this.randomImageIndices(this.list.length);
        console.log(imageIndices);
        this.recordViews(imageIndices);
        const choiceComponent = new Choice(this.list, imageIndices, (image) => {
            // modify the data
            this.list.clicks++;
            // update with the new copy
            choiceComponent.update(this.list);
        });
        choiceSection.appendChild(choiceComponent.render());



        if(this.votes === 25) {
            const resultSection = dom.getElementById('result');
            const resultComponent = new Result(this.list);
            resultSection.appendChild(resultComponent.render());
        }
        
        return dom;
    }

    randomImageIndices(max) {
        let array = [];
        for(let i = 0; i < 3;) {
            let int = randomInt(max);
            if(this.lastArray.includes(int) === false && array.includes(int) === false) {
                array[i] = int;
                i++;
            }
        }
        this.lastArray = array;
        return array;
    }

    recordViews(array) {
        for(let i in array) {
            this.list[array[i]].views++; 
        }
    }

}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}