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

            const row = document.createElement('tr');
            let product = this.list[i];
            const nameData = document.createElement('td');
            nameData.textContent = product.name;
            row.appendChild(nameData);
            
            const viewsData = document.createElement('td');
            viewsData.textContent = product.views;
            row.appendChild(viewsData);
            
            const countData = document.createElement('td');
            countData.textContent = product.count;
            row.appendChild(countData);
            resultsList.appendChild(row);

        }

        return dom;

    }

}