/* globals */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor() {
        
    }

    render() {
        const dom = choiceTemplate.content;

        // const choiceSection = dom.getElementById('choice');

        // const choiceComponent = new Choice();

        // choiceSection.appendChild(choiceComponent.render());
        
        return dom;
    }
}