/* exported Product, imagesData */
/* globals imagesData */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class ProductDisplay {
    constructor(imagesData, onSelect) {
        this.imagesData = imagesData;
        // this.image = image;
        this.onSelect = onSelect;
    }

    render() {
        const dom = imageDisplayTemplate.content.cloneNode(true);
        
        for(let i = 0; i < 3; i++) {
            this.img = dom.getElementById('img' + i);
            this.img.addEventListener('click', () => {
                this.onSelect(this.imagesData);
            });
            this.img.src = this.imagesData[i].imageSrc;
        }
        
        
        return dom;

    }
}

//comments for planning out next steps
//need render image method
//random method that will come before render image
//event listener waiting for clicks on images