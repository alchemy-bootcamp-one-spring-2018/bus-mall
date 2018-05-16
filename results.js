/* globals productList */

/* exported Results */

'use strict';

const resultsTemplate = document.getElementById('results-template');

class Results {
    
    constructor(list) {
        this.list = list;

    }

    render() {

        const dom = resultsTemplate.content.cloneNode(true);

        const resultsList = dom.getElementById('results-list');
        
        for(let i = 0; i < this.list.length; i++) {

            const list = document.createElement('p');
            list.textContent = this.list[i].name;
            resultsList.appendChild(list);
        }

        return dom;

    }

}