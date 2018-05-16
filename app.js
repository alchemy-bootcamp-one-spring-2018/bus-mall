/* exported App */

/* globals ProductChoice Results productList*/

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    
    constructor() {
        this.list = productList;
        this.lastDisplay = [];
    }

    randomize(max) {
        const productImages = [];
        
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * max);
            
            if(productImages.includes(this.list[index].image) || this.lastDisplay.includes(this.list[index].image)) {
                i--;
                continue;
            }
            productImages[i] = this.list[index].image;
        }
        
        this.lastDisplay = productImages;
        return productImages;
    }

    render() {
        
        const dom = appTemplate.content;
        
        const choiceSection = dom.getElementById('choice');
        const randomProducts = this.randomize(this.list.length);
        const choiceComponent = new ProductChoice(randomProducts, (choice) => {
            console.log(choice);
        });
        choiceSection.appendChild(choiceComponent.render());
        
        const resultsSection = dom.getElementById('results');
        const resultsComponent = new Results(productList);
        resultsSection.appendChild(resultsComponent.render());

        return dom;
    }
}

