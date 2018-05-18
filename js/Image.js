/* exported Image */
'use strict';

const imageTemplate = document.getElementById('image-template');

class Image {
    constructor(product, onClick) {
        this.product = product;
        this.onClick = onClick;
    }

    render() {
        const dom = imageTemplate.content.cloneNode(true);
        const image = dom.querySelector('img');
        image.src = this.product.image;
        
        image.addEventListener('click', () => {
            this.onClick(this.product);
        });
        
        const caption = dom.querySelector('p');
        caption.textContent = this.product.name;

        return dom;
    }
}