/* globals */
/* exported Choice */
'use strict';

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    constructor(objArray, onClick) {
        this.objArray = objArray;
        this.onClick = onClick;
    }

    // update(array) {
        
    //     while(this.imageSection.lastElementChild) {
    //         this.imageSection.lastElementChild.remove();
    //     }

    //     for(let i = 0; i < array.length; i++) {
    //         const imageComponent = new Image(array[i], this.onClick);

    //         this.imageSection.appendChild(imageComponent.render());
    //     }

    }
    render() {
        console.log('choice:', this.objArray);
        const dom = choiceTemplate.content.cloneNode(true);
        this.imageSection = dom.getElementById('image-section');

        for(let i = 0; i < this.objArray.length; i++) {
            const imageComponent = new Image(this.objArray[i].image, this.onClick);
            this.imageSection.appendChild(imageComponent.render());
        }
        
        return dom;
    }
}

