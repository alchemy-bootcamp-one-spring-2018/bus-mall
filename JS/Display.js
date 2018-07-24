/* globals images, randomize Selected */
/* exported Display images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list, onClick) {
        this.list = list;
        this.onClick = onClick;
    }

    

    updateProducts() {
        // const displayProducts = randomize(this.list, this.onclick);
        // this.imageDisplayComponent.update(displayProducts);
        console.log('test');
    }
    // console.log(updateProducts());
    
    render() {
        const dom = imageTemplate;
                
        const imageSection = dom.getElementById('three-images');
       
        for(let i = 0; i < 3; i++) {
            const selectedImage = new Selected(this.list[i], this.onClick);
            imageSection.appendChild(selectedImage.render());
        }
        return dom;
    }
}