/* globals */
/* exported Result */
'use strict';
const resultTemplate = document.getElementById('result-template');

class Result {
    constructor() {
    
    }
    render() {
        const dom = resultTemplate.content.cloneNode(true);
        const h2 = dom.querySelector('h2');
        h2.textContent = 'Results:';
    
        return dom;
    }
}

