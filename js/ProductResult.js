/* globals */
/* exported ProductResult */
'use strict';

const productResultTemplate = document.getElementById('product-result-template');

class ProductResult {
    constructor(product) {
        this.product = product;
    }

    calcPercentage() {
        let percentage;
        if(this.product.views) {
            percentage = parseInt(this.product.clicks / this.product.views * 100);
        }
        this.product.percentage = percentage + '%';
    }

    render() {
        const dom = productResultTemplate.content.cloneNode(true);
  
        const columns = dom.querySelectorAll('td');
        
        columns[0].textContent = this.product.name;
        columns[1].textContent = this.product.clicks;
        columns[2].textContent = this.product.views;
        this.calcPercentage();
        columns[3].textContent = this.product.percentage;

        return dom;
    }
}