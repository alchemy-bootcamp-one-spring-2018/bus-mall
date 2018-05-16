/* globals */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor(list, indices, onClick) {
        this.list = list;
        this.indices = indices;
        this.onClick = onClick;
    }

    update(indices) {
        const imageSection = this.imageSection;
        while(imageSection.lastElementChild) {
            imageSection.lastElementChild.remove();
        }
        for(let i = 0; i < indices.length; i++) {
            const imageComponent = new Image(indices[i], this.onClick);

            imageSection.appendChild(imageComponent.render());
        }

    }
    render() {
        const dom = choiceTemplate.content.cloneNode(true);
        const imageSection = dom.getElementById('image-section');
        this.imageSection = imageSection;

        for(let i = 0; i < this.indices.length; i++) {
            const imageComponent = new Image(this.list[this.indices[i]].image, this.onClick);
            imageSection.appendChild(imageComponent.render());
        }
        
        return dom;
    }
}

