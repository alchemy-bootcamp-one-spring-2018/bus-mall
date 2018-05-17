'use strict';
/* globals imageArray */
/* exported ResultsDisplay */

const resultsDisplayTemplate = document.getElementById('results-display-template').content;

class ResultsDisplay {

    constructor() {
        this.products = imageArray;
    }

    update(products) {
        this.products = products;
        while(this.row.lastElementChild) {
            this.row.lastElementChild.remove();
        }

        for(var i = 0; i < this.products.length; i++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(this.products[i].name + ' ' + 'Votes: ' + this.products[i].timesVoted);
            cell.appendChild(cellText);
            this.row.appendChild(cell);
        }
    
    }

    render() {
        const dom = resultsDisplayTemplate;
        const tbl = document.createElement('table');
        tbl.setAttribute('id', 'results-table');
        this.row = document.createElement('tr');
        this.update(this.products);

        tbl.appendChild(this.row);
        dom.appendChild(tbl);
        return dom;
    }

}