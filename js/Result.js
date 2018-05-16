/* globals */
/* exported Result */
'use strict';
const resultTemplate = document.getElementById('result-template');

class Result {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = resultTemplate.content.cloneNode(true);
  
        const resultList = dom.getElementById('result-list');

        for(let i = 0; i < this.list.length; i++) {
            const resultItem = document.createElement('p');
            resultItem.textContent = this.list[i].name + '; Views: ' + this.list[i].views + '; Clicks: ' + this.list[i].clicks;
            resultList.appendChild(resultItem);
        }

        return dom;
    }
}