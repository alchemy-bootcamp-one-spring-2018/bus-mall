/* globals Results, productArray, ResultsChart */
/* exported ResultReportApp */



class ResultReportApp {
    constructor() {
        this.productArray = productArray;
    }

    render() {
        
        const dom = document.getElementById('app-template').content;

        const resultsSection = dom.getElementById('results');

        const resultsComponent = new Results(this.productArray);

        resultsSection.appendChild(resultsComponent.render());

        const resultsChartSection = dom.getElementById('results-chart');

        const resultsChartComponent = new ResultsChart(this.productArray);

        resultsChartSection.appendChild(resultsChartComponent.render());

        return dom;
    }
}
