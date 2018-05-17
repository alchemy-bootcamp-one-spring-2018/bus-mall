'use strict';
const resultDataTemplate = document.getElementById('results-data-template');

class SurveyResult {
    constructor(object) {
        this.object = object;
    }
    render() {
        const dom = resultDataTemplate.content.cloneNode(true);

        return dom;
    }

}