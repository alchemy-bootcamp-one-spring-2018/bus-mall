/* globals images Selected */
/* exported Display images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list, onClick) {
        this.list = list;
        this.onClick = onClick;
        
    }

    // whenClicked = function() {

    render() {
        const dom = imageTemplate;
                
        const imageSection = dom.getElementById('three-images');
                
        // whenClicked(domImage) {

        for(let i = 0; i < 3; i++) {
            const selectedImage = new Selected(this.list[i], this.onClick);
            imageSection.appendChild(selectedImage.render());
        }
        return dom;
    }

    // }
}