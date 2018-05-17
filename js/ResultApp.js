/* globals Result, productList*/
/* exported ResultApp */

const appTemplate = document.getElementById('app-template');

class ResultApp {
    constructor() {
        this.list = productList;
        
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
        const resultSection = dom.getElementById('result');
        const resultComponent = new Result(this.list);
        resultSection.appendChild(resultComponent.render());
        return dom;
    }

    
}
