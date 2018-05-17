'use strict';
/* globals imageArray */
/* exported ResultsDisplay */

const resultsDisplayTemplate = document.getElementById('results-display-template').content;

class ResultsDisplay {

    constructor() {
        this.products = imageArray;
    }

    render() {
        const dom = resultsDisplayTemplate;
        
        const tbl = document.createElement('table');
        tbl.setAttribute('id', 'results-table');

        const row = document.createElement('tr');
        
        for(var i = 0; i < this.products.length; i++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(this.products[i].name + ' ' + 'Votes: ' + this.products[i].timesVoted);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbl.appendChild(row);
        
        
        dom.appendChild(tbl);
        return dom;
    }
}