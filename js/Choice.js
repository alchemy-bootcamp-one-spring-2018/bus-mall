/* globals */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor(list, indices) {
        this.list = list;
        this.indices = indices;
    }

    render() {
        const dom = choiceTemplate.content.cloneNode(true);
        const imageSection = dom.getElementById('image-section');

        for(let i = 0; i < this.indices.length; i++) {
            const imageComponent = new Image(this.list[this.indices[i]].image);
            imageSection.appendChild(imageComponent.render());
        }
        
        return dom;
    }
}