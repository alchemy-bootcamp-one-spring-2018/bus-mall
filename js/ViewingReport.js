/* globals ProductReport */
/* exported ViewingReport */
'use strict';
//gets template element named 'viewing-report-template'
const viewingReportTemplate = document.getElementById('viewing-report-template');

class ViewingReport {
    constructor(productsArray) {
        this.productsArray = productsArray;
    }

    render() {
        const dom = viewingReportTemplate;
        console.log('productsArray is:', this.productsArray);
        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.productsArray.length; i++) {
            const reportComponent = new ProductReport(this.productsArray[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

        return dom;
    }
}