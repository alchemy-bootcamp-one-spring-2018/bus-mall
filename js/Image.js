'use strict';

const imageTemplate = document.getElementById('image-template');

class Image {
    constructor(image, onClick) {
        this.image = image;
        this.onClick = onClick;
    }

    render() {
        const dom = imageTemplate.content.cloneNode(true);
        const image = dom.querySelector('img');
        image.src = this.image;
        image.addEventListener('click', () => {
            console.log('click');
            this.onClick(this.image);
        });
        
        return dom;
    }
}