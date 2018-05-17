/* exported ResultsArea*/
/* globals SurveyResult */
const resultsTemplate = document.getElementById('results-template');

class ResultsArea {
    constructor(list) {
        this.list = list;
    }
    render() {
        const dom = resultsTemplate.content.cloneNode(true);
        const tableBody = dom.querySelector('tbody');
        const resultComponent = new SurveyResult(this.list[10]);
        tableBody.appendChild(resultComponent.render());
        return dom;
    }

}

