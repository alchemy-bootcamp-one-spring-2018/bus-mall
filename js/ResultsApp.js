/* exported ResultsApp */
/* globals ProductTable, imagesData */
'use strict';

const resultsAppTemplate = document.getElementById('results-app-template');

class ResultsApp {
    constructor() {
        this.imagesData = imagesData;
    }

    render() {
        const dom = resultsAppTemplate.content;

        const productReportSection = dom.getElementById('product-table-report-section');
        const productReportComponent = new ProductTable(this.imagesData);
        const productReportDom = productReportComponent.render();
        productReportSection.appendChild(productReportDom);


        return dom;
    }
}