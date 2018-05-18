/* globals InputImage*/
/* exported ImageViewer */
'use strict';

const imageViewerTemplate = document.getElementById('image-viewer-template');

class ImageViewer {
    constructor(threeProducts, clicked) {
        this.threeProducts = threeProducts;
        this.clicked = clicked;
    }

    update(imgArray) {
        this.threeProducts = imgArray;
        while(this.imageViewerSection.lastElementChild) {
            this.imageViewerSection.lastElementChild.remove();
        }

        for(let i = 0; i < imgArray.length; i++) {
            const imageComponent = new InputImage(imgArray[i], this.clicked);

            this.imageViewerSection.appendChild(imageComponent.render());
        }

    }
    render() {
        
        const dom = imageViewerTemplate.content.cloneNode(true);
        this.imageViewerSection = dom.getElementById('image-viewer-section');

        this.update(this.threeProducts);
        
        return dom;
    }
}