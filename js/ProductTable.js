/* exported ProductTable */
/* globals ProductTotals */
'use strict';

const productTableTemplate = document.getElementById('product-table-report-template').content;

class ProductTable {
    constructor(imagesData) {
        this.imagesData = imagesData;

    }

    render() {
        const dom = productTableTemplate;
        console.log('dom', dom);

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.imagesData.length; i++) {
            const tableComponent = new ProductTotals(this.imagesData[i]);
            this.tableBody.appendChild(tableComponent.render());
        }

        return dom;
    }
}