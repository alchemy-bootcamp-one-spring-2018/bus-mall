/* globals */
/* exported Vote */
'use strict';

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {
    constructor(image0, image1, image2, onImageVote) {
        this.image0 = image0;
        this.image1 = image1;
        this.image2 = image2;
        this.onImageVote = onImageVote;
        
    }


    render() {
        const dom = imageViewerTemplate.cloneNode(true);
        
        const first = dom.getElementById('item-0');
        first.src = this.image0.image;
        first.addEventListener('click', () => {
            this.onImageVote(this.image0.name);
            
        });
        const second = dom.getElementById('item-1');
        second.src = this.image1.image;
        second.addEventListener('click', () => {
            this.onImageVote(this.image1.name);
        });
        const third = dom.getElementById('item-2');
        third.src = this.image2.image;
        third.addEventListener('click', () => {
            this.onImageVote(this.image2.name);
        });



        
        return dom;
    }
}