/* exported ProductDisplay, imagesData */
/* globals imagesData */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class ProductDisplay {
    constructor(imagesData, onSelect) {
        this.imagesData = imagesData;
        this.onSelect = onSelect;
    }

    update(imagesData) {
        this.imagesData = imagesData;
        
        for(let i = 0; i < 3; i++) {
            const img = this.container.querySelector('#img' + i);
            img.src = this.imagesData[i].imageSrc;
            imagesData[i].views++;
        }
    }

    render() {
        const dom = imageDisplayTemplate.content.cloneNode(true);
        this.container = dom.querySelector('div');

        for(let i = 0; i < 3; i++) {
            const img = this.container.querySelector('#img' + i);
            img.addEventListener('click', () => {
                this.onSelect(this.imagesData[i]);
            });
        }

        this.update(this.imagesData);
        
        return dom;

    }
}
