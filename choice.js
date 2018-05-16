/* exported ProductChoice */
const productTemplate = document.getElementById('choice-template');

class ProductChoice {
    
    constructor(list) {
        this.list = list;
    }

    update() {
        
    }

    render() {
        
        const dom = productTemplate.content;

        for(let i = 0; i < this.list.length; i++) {
            let product = dom.getElementById('product-' + i);
            product.src = this.list[i];
        
        }
        
        return dom;
    }
}