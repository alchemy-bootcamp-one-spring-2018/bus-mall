

/* exported Results*/
/* globals Result */
const resultsTemplate = document.getElementById('results-template');

class Results {
    constructor(list) {
        this.list = list;
    }
    render() {
        const dom = resultsTemplate.content.cloneNode(true);
        for(let i = 0; i < this.list.length; i++){
            const tableBody = dom.querySelector('tbody');
            const resultComponent = new Result(this.list[i]);
            tableBody.appendChild(resultComponent.render());
            console.log('tableBody', tableBody.appendChild(resultComponent.render()));
        }
        return dom;
    }
}