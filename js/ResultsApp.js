/* exported ResultsApp */
/* globals ProductTable, imagesData, clearProductsData, ProductChart */
'use strict';

const resultsAppTemplate = document.getElementById('results-app-template');

class ResultsApp {
    constructor() {
        this.imagesData = imagesData;
    }

    render() {
        const dom = resultsAppTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearProductsData();
            window.location.reload();
        });

        const productReportSection = dom.getElementById('product-table-report-section');
        const productReportComponent = new ProductTable(this.imagesData);
        const productReportDom = productReportComponent.render();
        productReportSection.appendChild(productReportDom);

        const productChartSection = dom.getElementById('chart-section');
        const productChartComponent = new ProductChart(this.imagesData);
        const productChartDom = productChartComponent.render();
        productChartSection.appendChild(productChartDom);

        return dom;
    }
}