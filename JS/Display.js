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
        
        for(let i = 0; i < 3; i++) {
            const selectedImage = new Selected(this.list[i]);
            const whatever = selectedImage.object.path;
            console.log(whatever);
            // console.log(selectedImage.object.name);
            imageSection.appendChild(selectedImage.render());
            console.log('in display.js');
        }
        return dom;

    }
}