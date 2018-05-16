/* exported ProductChoice */
const productTemplate = document.getElementById('choice-template');

class ProductChoice {
    
    constructor(image) {
        this.image = image;
    }

    render() {
        
        const testing = productTemplate.content;

        for(let i = 0; i < this.image.length; i++) {
            let product = testing.getElementById('product-' + i);
            product.src = this.image[i];
        
        }
        
        return testing;
    }
}