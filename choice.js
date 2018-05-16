/* exported ProductChoice */
const productTemplate = document.getElementById('choice-template');

class ProductChoice {
    
    constructor(list) {
        this.list = list;
    }

    render() {
        
        const testing = productTemplate.content;

        for(let i = 0; i < this.list.length; i++) {
            let product = testing.getElementById('product-' + i);
            product.src = this.list[i];
        
        }
        
        return testing;
    }
}