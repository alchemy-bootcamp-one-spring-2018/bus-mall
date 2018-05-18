/* globals Image */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor(randomProductsArray, onClick) {
        this.randomProductsArray = randomProductsArray;
        this.onClick = onClick;
    }

    update(array) {
        this.randomProductsArray = array;
        while(this.imageSection.lastElementChild) {
            this.imageSection.lastElementChild.remove();
        }

        for(let i = 0; i < array.length; i++) {
            const imageComponent = new Image(array[i], this.onClick);
            this.imageSection.appendChild(imageComponent.render());
            imageComponent.id = 'image-' + i;
        }

    }
    render() {
        
        const dom = choiceTemplate.content.cloneNode(true);
        this.imageSection = dom.getElementById('image-section');

        this.update(this.randomProductsArray);
        
        return dom;
    }
}

