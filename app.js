/* exported App */

/* globals ProductChoice Results*/

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    
    constructor() {

    }

    render() {
        // grabs 
        const dom = appTemplate.content;
        
        const productSection = dom.getElementById('product-choice');

        const resultsSection = dom.getElementById('results');

        const productComponent = new ProductChoice();

        productSection.appendChild(productComponent.render());

        const choicesComponent = new Results();
        
        resultsSection.appendChild(choicesComponent.render());

        return dom;
    }
}

