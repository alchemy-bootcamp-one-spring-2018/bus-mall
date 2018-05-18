/* globals ProductResults */
/* exported Results */
'use strict';

class Results {
    constructor(productArray) {
        this.productArray = productArray;
    }

    render() {
        const dom = document.getElementById('results-template').content;
        const resultsBody = dom.querySelector('tbody');

        for(let i = 0; i < this.productArray.length; i++) {
            const resultItem = new ProductResults(this.productArray[i]);
            resultsBody.appendChild(resultItem.render());
        }

        return dom;
    }
}