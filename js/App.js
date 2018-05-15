/* globals Choice, Result */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        
    }

    render() {
        const dom = appTemplate.content;

        const choiceSection = dom.getElementById('choice');
        const choiceComponent = new Choice();

        const resultSection = dom.getElementById('result');
        const resultComponent = new Result();

        choiceSection.appendChild(choiceComponent.render());
        resultSection.appendChild(resultComponent.render());
        
        return dom;
    }
}

