/* exported ImageArea  */
/* globals ImageMaker */
'use strict';

const votingTemplate = document.getElementById('voting-template');
class ImageArea {
    constructor(imageArray, onClick){
        this.imageArray = imageArray;
        this.onClick = onClick;

    }

    update(imageArray) {
        this.ImageArray = imageArray;
        while(this.imgSection.lastElementChild){
            this.imgSection.lastElementChild.remove();
        }
        for(let i in this.imageArray){
            this.imgComponent = new ImageMaker(this.imageArray[i], this.onClick);
            this.imgSection.appendChild(this.imgComponent.render());
        }
    }
    render() {
        const dom = votingTemplate.content.cloneNode(true);
        this.imgSection = dom.querySelector('section');
        this.update(this.ImageArray);

        return dom;
    }
}

