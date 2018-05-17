
/* globals Product, productList */
/* exported Result */



const resultsTemplate = document.getElementById('results-template');

class VoteResults {
    constructor(){

    }
    render() {
        const voteResults = resultsTemplate.content.cloneNode(true);

        return voteResults;
    }
}