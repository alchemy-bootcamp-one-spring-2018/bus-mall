/* globals Product */
/* exported ProductSelector */

const productSelectorTemplate = document.getElementById('product-selector-template').content;

class ProductSelector {

    constructor(productArray, onSelect) {
        this.productArray = productArray;
        this.onSelect = onSelect;
    }
    render() {
        const dom = productSelectorTemplate;
        const ul = dom.querySelector('ul');

        for(let i = 0; i < this.productArray.length; i++) {
            const productComponent = new Product(this.productArray[i], this.onSelect);
            const productDom = productComponent.render();
            ul.appendChild(productDom);
        }

        return dom;
    }
}
