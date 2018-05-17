/* globals  ResultsArea  objectArray*/
/* exported vote App */
let votes = 0;
const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = objectArray;
        this.votes = votes;
    }

    showResults() {

        
    }
    render(){
        const dom = appTemplate.content;

        const resultsSection = dom.getElementById('results-section');
        const resultsData = new ResultsArea(this.list);
        resultsSection.appendChild(resultsData.render());
  
        return dom;
    }
}

