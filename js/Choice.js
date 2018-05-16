/* globals */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor(image1, image2, image3) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
    }

    render() {
        const dom = choiceTemplate.content.cloneNode(true);
        const first = dom.getElementById('product-0');
        first.src = this.image;
        // const choiceSection = dom.getElementById('choice');

        // const choiceComponent = new Choice();

        // choiceSection.appendChild(choiceComponent.render());
        
        return dom;
    }
}