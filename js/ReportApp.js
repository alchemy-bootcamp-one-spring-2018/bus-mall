/* globals ChartDisplay */
/* exported ReportApp */
const appTemplate = document.getElementById('app-template');

class ReportApp {

    constructor() {
    }

    render() {
        const dom = appTemplate.content;

        this.resultsSection = dom.getElementById('results-section');

        if(localStorage !== 0) {
            this.dataList = JSON.parse(localStorage.getItem('dataList'));
        }
        this.ChartDisplay = new ChartDisplay(this.dataList);
        this.resultsSection.appendChild(this.ChartDisplay.render());

        // dom.appendChild(this.resultsSection);

        return dom;
    }
}