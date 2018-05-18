/* exported App */

/* globals ProductChoices productList*/

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    
    constructor() {
        this.list = productList;
        this.vote = 0;
        this.lastDisplay = [];
    }

    randomize(max) {
        const productImages = [];
        
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * max);
            
            if(productImages.includes(this.list[index]) || this.lastDisplay.includes(this.list[index])) {
                i--;
                continue;
            }
    
            productImages[i] = this.list[index];
            productImages[i].views++;
        }
        
        this.lastDisplay = productImages;
        return productImages;
    }

    render() {
        
        const dom = appTemplate.content;
        
        const choiceSection = dom.getElementById('choices');
        const randomProducts = this.randomize(this.list.length);
        const choiceComponent = new ProductChoices(randomProducts, (choice) => {
            choiceComponent.update(this.randomize(this.list.length));
            choice.count++;
            this.vote++;
            console.log(choiceComponent);
            
            if(this.vote === 5) {
                choiceComponent.clear();
            }
        });
        
        choiceSection.appendChild(choiceComponent.render());
        
        return dom;
    }
}


