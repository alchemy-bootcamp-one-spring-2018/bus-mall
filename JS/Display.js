/* globals images Selected */
/* exported Display images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list) {
        this.list = list;
        
    }

    render() {
        const dom = imageTemplate;
        
        const imageSection = dom.getElementById('three-images');
        
        // whenClicked() {

        for(let i = 0; i < 3; i++) {
            const selectedImage = new Selected(this.list[i]);
            imageSection.appendChild(selectedImage.render());
        }
        return dom;

    }
}