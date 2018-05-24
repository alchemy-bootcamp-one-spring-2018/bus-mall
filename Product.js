/* exported Product */

const productTemplate = document.getElementById('product-template');

class Product {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }
    updateImage() {

        this.image.src = this.product.name;
        return this.dom;
    }

    render() {
        this.dom = productTemplate.content.cloneNode(true);
        this.image = this.dom.querySelector('img');
        this.image.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        this.updateImage();
        return this.dom;
    }

}