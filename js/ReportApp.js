/* globals ChartDisplay */
/* exported ReportApp */
const appTemplate = document.getElementById('app-template');

class ReportApp {

    constructor() {
        this.dataList = window.localStorage.getItem('dataList');
    }

    render() {
        const dom = appTemplate.content;

        this.resultsSection = dom.getElementById('results-section');

        this.ChartDisplay = new ChartDisplay(this.dataList);
        this.resultsSection.appendChild(this.ChartDisplay.render());

        // dom.appendChild(this.resultsSection);

        return dom;
    }
}