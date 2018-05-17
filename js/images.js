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
            img.addEventListener('click', () => {
                this.onSelect(this.imagesData[i]);
                // this.imagesData[i].votes++;
                console.log(this.imagesData[i].votes);
            });
            img.src = this.imagesData[i].imageSrc;
        }
    }

    render() {
        const dom = imageDisplayTemplate.content.cloneNode(true);
        this.container = dom.querySelector('div');
        
        this.update(this.imagesData);
        
        return dom;

    }
}
