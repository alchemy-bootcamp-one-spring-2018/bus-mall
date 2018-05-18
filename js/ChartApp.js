'use strict';
/* globals Chart */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor(imageArray) {
        this.products = imageArray;
    }

    render() {
        const dom = appTemplate.content;

        const viewingChartSection = dom.getElementById('chart-display');
        const viewingChartComponent = new Chart(this.channels);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);


        return dom;
    }
}