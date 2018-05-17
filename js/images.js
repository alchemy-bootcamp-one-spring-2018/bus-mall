/* exported ProductDisplay, imagesData */
/* globals imagesData */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class ProductDisplay {
    constructor(imagesData, onSelect) {
        this.imagesData = imagesData;
        this.onSelect = onSelect;
    }

    //add update()

    render() {
        const dom = imageDisplayTemplate.content.cloneNode(true);
        
        for(let i = 0; i < 3; i++) {
            this.img = dom.getElementById('img' + i);
            this.img.addEventListener('click', () => {
                this.onSelect(this.imagesData);
                this.imagesData[i].votes++;
                console.log(this.imagesData[i].votes);
            });
            this.img.src = this.imagesData[i].imageSrc;
        }
        
        return dom;

    }
}
