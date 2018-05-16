/* exported App */

/* globals ProductChoice Results productList*/

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    
    constructor() {

    }

    render() {
        
        const dom = appTemplate.content;
        
        const productSection = dom.getElementById('product-choice');

        const resultsSection = dom.getElementById('results');

        const testing = randomInt(productList.length);
        
        const productComponent = new ProductChoice(testing);

        productSection.appendChild(productComponent.render());

        const choicesComponent = new Results(productList);
        
        resultsSection.appendChild(choicesComponent.render());

        return dom;
    }
}

function randomInt(max) {
    
    const displayImages = [];
    
    for(let i = 0; i < 3; i++) {
        displayImages[i] = productList[Math.floor(Math.random() * max)].image;
        
        if(displayImages)
        
    }
    
    return displayImages;
}

