/* globals */
/* exported */
'use strict';
const resultTemplate = document.getElementById('result-template');

class Result {
    constructor() {
        
    }

    render() {
        const dom = resultTemplate.content;

        // const choiceSection = dom.getElementById('choice');

        // const choiceComponent = new Choice();

        // choiceSection.appendChild(choiceComponent.render());
        
        return dom;
    }
}