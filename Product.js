/* exported Product */

const productTemplate = document.getElementById('product-template');


class Product {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }


    render() {
        console.log('this.product', this.product);
        const dom = productTemplate.content.cloneNode(true);
        const img = dom.querySelector('img');
        img.src = this.product.name;
        img.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        return dom;
    }
}

