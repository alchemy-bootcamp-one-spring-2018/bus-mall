/* globals Product randomize*/
/* exported ImageDisplay imageElement */


const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(imageSrc, onSelect) {
        this.imageSrc = imageSrc;
        this.onSelect = onSelect;
        
    }
    update() {
        this.imageSrc = randomize();
        
    }
    render() {
        if(this.rendered) {
            this.update();
        }
        else {
            this.dom = imageTemplate;
        
            this.imageContainer = this.dom.querySelector('#image-container');

            this.imageSrc = randomize();
            console.log('this.imageSrc', this.imageSrc);
    
            for(let i = 0; i < 3; i++) {
            
                const productComponent = new Product(this.imageSrc[i], this.onSelect);
            
                this.imageContainer.appendChild(productComponent.render());
            
            }
            this.rendered = true;
            return this.dom;

        }
    }
}