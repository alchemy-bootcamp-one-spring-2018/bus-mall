/* exported InputImage */
'use strict';

const insertImageTemplate = document.getElementById('insert-image-template');

class InputImage {
    constructor(product, clicked) {
        this.product = product;
        this.clicked = clicked;
    }

    render() {
        const dom = insertImageTemplate.content.cloneNode(true);
        const image = dom.querySelector('img');
        image.src = this.product.image;
        image.addEventListener('click', () => {
            this.clicked(this.product);
        });

        return dom;
    }
}