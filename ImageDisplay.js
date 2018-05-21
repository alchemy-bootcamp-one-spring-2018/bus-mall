/* globals Product */
/* exported ImageDisplay imageElement */


const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(imageSrc, onSelect) {
        this.imageSrc = imageSrc;
        this.onSelect = onSelect;
        
    }
    
    render() {
        const dom = imageTemplate.cloneNode(true);
        console.log('onSelect', this.onSelect);
        const imageContainer = dom.querySelector('#image-container');

        console.log('Product', Product);
        for(let i = 0; i < 3; i++) {
            const productComponent = new Product(this.imageSrc[i], this.onSelect);
            
            imageContainer.appendChild(productComponent.render());
    
        }
        return dom;
    }
}