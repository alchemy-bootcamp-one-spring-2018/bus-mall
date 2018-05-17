/* exported Product */

const productTemplate = document.getElementById('product-template').cotent;

class Product {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = productTemplate.cloneNode(true);

        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
        });

        const header = dom.querySelector('h3');
        header.textContent = this.product.name;

        return dom;
    }
}