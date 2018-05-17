'use strict';

/* exported Vote */

const productTemplate = document.getElementById('product-display-template').content;

class Vote {
    constructor(productOption, onSelect){
        this.productOption = productOption;
        this.onSelect = onSelect;
    }

    render() {
        const dom = productTemplate.cloneNode(true);

        const img = dom.querySelector('img');
        img.addEventListener('click', () => {
            this.onSelect(this.productOption);
        });

        return dom;
    }

}