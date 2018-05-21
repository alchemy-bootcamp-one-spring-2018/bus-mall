/* globals ViewingChart ResultsArea  clearObjectsData objectArray*/
/* exported vote   App */
let votes = 0;
const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = objectArray;
        this.votes = votes;
    }

    render(){
        const dom = appTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearObjectsData();
            window.location.reload();
        });

        const resultsSection = dom.getElementById('results-section');
        const resultsData = new ResultsArea(this.list);
        resultsSection.appendChild(resultsData.render());
        const chartArea = new ViewingChart(this.list);
        resultsSection.appendChild(chartArea.render());
        return dom;
    }
}

