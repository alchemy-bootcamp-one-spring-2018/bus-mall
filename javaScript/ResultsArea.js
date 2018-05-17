/* exported ResultsArea*/
/* globals SurveyResult */
const resultsTemplate = document.getElementById('results-template');

class ResultsArea {
    constructor(list) {
        this.list = list;
    }
    render() {
        const dom = resultsTemplate.content.cloneNode(true);
        for(let i = 0; i < this.list.length; i++){
            const tableBody = dom.querySelector('tbody');
            const resultComponent = new SurveyResult(this.list[i]);
            tableBody.appendChild(resultComponent.render());
        }
        return dom;
    }

}

