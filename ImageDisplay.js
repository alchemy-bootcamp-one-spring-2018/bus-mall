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


            
            // const imageElement = dom.getElementById('img' + i);
            // imageElement.src = this.imageSrc[i].name;
            // console.log('imageElement', imageElement);
            // img.addEventListener('click', () => {
            //     this.onSelect(this.imageSrc[i]);
            // });
            // imageElement.style.height = '200px';
        }
        return dom;
    }
}