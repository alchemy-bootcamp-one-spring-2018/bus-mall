/* globals ProductResult */
/* exported Result */
'use strict';
const resultTemplate = document.getElementById('result-template');

class Result {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = resultTemplate.content;
  
        const resultBody = dom.querySelector('tbody');

        for(let i = 0; i < this.list.length; i++) {
            const resultItem = new ProductResult(this.list[i]);
            resultBody.appendChild(resultItem.render());
        }

        return dom;
    }
}