/* exported ResultsArea */
const resultsTemplate = document.getElementById('results-template');

class ResultsArea {
    render() {
        const dom = resultsTemplate.content.cloneNode(true);

        return dom;
    }

}

