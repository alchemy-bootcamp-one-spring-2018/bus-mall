/* globals */
/* exported ProductResults */
'use strict';

const productResultsTemplate = document.getElementById('product-results-template');

class ProductResults {
    constructor(product) {
        this.product = product;
    }

    render() {
        const dom = productResultsTemplate.content.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.product.name;
        columns[1].textContent = this.product.clicks;
        columns[2].textContent = this.product.views;
        return dom;
    }
}