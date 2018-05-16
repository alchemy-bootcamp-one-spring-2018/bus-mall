/* exported Product */
/* globals imagesData */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class ProductDisplay {
    constructor(imagesData) {
        this.imagesData = imagesData;
    }

    update(imagesData) {
        this.imagesData = imagesData;

        // this.header.textContent = this.imagesData.name;
        this.img.src = this.imagesData.imageSrc;
    }

    render() {
        const dom = imageDisplayTemplate.content.cloneNode(true);
        

        for(let i = 0; i < 3; i++) {
            // this.header = dom.querySelector('h2');
            this.img = dom.querySelector('img');
        }
        this.update(this.imagesData);
        
        return dom;

    }
}

//comments for planning out next steps
//need render image method
//random method that will come before render image
//event listener waiting for clicks on images