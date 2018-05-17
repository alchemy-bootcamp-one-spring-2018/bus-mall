/* globals  */
/* exported  */
'use strict';

const productTableTemplate = document.getElementById('product-table-report-template').content;

class ProductTable {
    constructor(imagesData) {
        this.imagesData = imagesData;

    }

    render() {
        const dom = productTableTemplate;

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.imagesData.length; i++) {
            //to be added
        }
    }
}