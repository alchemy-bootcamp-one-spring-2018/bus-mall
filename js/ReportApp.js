/* globals ChartDisplay ResultsDisplay */
/* exported ReportApp */
const appTemplate = document.getElementById('app-template');

class ReportApp {

    constructor() {
    }

    setResults() {
        if(!this.resultsDisplay) {
            this.resultsDisplay = new ResultsDisplay(this.resultsList);
            this.resultsSection.appendChild(this.resultsDisplay.render());
        }
        else {
            this.resultsDisplay.render();
        }
    }

    setChart() {
        if(!this.chartDisplay) {
            this.chartDisplay = new ChartDisplay(this.dataList);
            this.chartSection.appendChild(this.chartDisplay.render());
        } else {
            this.chartDisplay.render();
        }
    }

    setStorage() {
        document.getElementById('clear').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.clear();
            this.dataList = [];
            this.resultsList = [];
            this.chartSection.style.display = 'none';
            this.resultsSection.style.display = 'none';
            return;
        });
        if(localStorage.length === 0) {
            this.dataList = [];
            this.resultsList = [];
        }
        else {
            this.dataList = JSON.parse(localStorage.getItem('dataList'));
            this.resultsList = JSON.parse(localStorage.getItem('resultsList'));
        }
    }

    render() {
        const dom = appTemplate.content;
        this.resultsSection = dom.getElementById('results-section');
        this.chartSection = dom.getElementById('chart-section');

        this.setStorage();
        this.setResults();
        this.setChart();

        return dom;
    }
}