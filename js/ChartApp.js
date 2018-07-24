'use strict';
/* globals ViewingChart imageArray */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.products = imageArray;
    }

    render() {
        const dom = appTemplate.content;

        const addChartSection = dom.getElementById('chart-display');
        const addChartComponent = new ViewingChart(this.products);
        addChartSection.appendChild(addChartComponent.render());


        return dom;
    }
}