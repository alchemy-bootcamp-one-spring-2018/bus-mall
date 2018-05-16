
/* globals Product, productList */
/* exported Result */



const resultsTemplate = document.getElementById('results-template');

class Result {
    constructor(){

    }
    render() {
        const resultTest = resultsTemplate.content.cloneNode(true);

        return resultTest;
    }
}