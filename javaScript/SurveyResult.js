'use strict';
const resultDataTemplate = document.getElementById('results-data-template');

class SurveyResult {
    constructor(object) {
        this.object = object;
    }
    render() {
        const dom = resultDataTemplate.content.cloneNode(true);
        const column = dom.querySelectorAll('td');
        column[0].textContent = this.object.name;
        column[1].textContent = this.object.views;
        column[2].textContent = this.object.clicks;
        return dom;
    }

}