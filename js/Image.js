'use strict';

const imageTemplate = document.getElementById('image-template');

class Image {
    constructor(image) {
        this.image = image;
    }

    render() {
        const dom = imageTemplate.content.cloneNode(true);
        const image = dom.querySelector('img');
        image.src = this.image;
        
        return dom;
    }
}