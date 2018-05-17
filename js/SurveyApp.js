/* globals Choice, productList*/
/* exported SurveyApp */

const appTemplate = document.getElementById('app-template');

class SurveyApp {
    constructor() {
        this.list = productList;
        this.votes = 0;
        this.lastArray = [];
    }

    showThanks() {
        while(this.choiceSection.lastElementChild) {
            this.choiceSection.lastElementChild.remove();
        }

        const thankComponent = document.createElement('h2');
        thankComponent.id = 'thanks-message';
        thankComponent.textContent = 'Thanks for participating!';
        this.choiceSection.appendChild(thankComponent);
    }

    render() {
        const dom = appTemplate.content;
        this.choiceSection = dom.getElementById('choice');

        const imagesArray = this.randomThreeObjects(this.list.length);

        const choiceComponent = new Choice(imagesArray, (product) => {
            product.clicks++;
            this.votes++;
            const imagesArray = this.randomThreeObjects(this.list.length);
            choiceComponent.update(imagesArray);
            if(this.votes === 10) {
                this.showThanks();
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
