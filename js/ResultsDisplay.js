/* globals  */
/* exported ResultsDisplay */
const resultsTemplate = document.getElementById('results-template');

class ResultsDisplay {

    constructor(resultsList) {
        this.resultsList = resultsList;
    }

    setResults() {
        if(this.resultsList.length === 0) {
            this.table.textContent = 'PLEASE VOTE ON SOME PICTURES TO SEE RESULTS';
        }
        else {
            this.resultsList = [{ name: 'Picture', shown: 'Times Shown', votes: 'Times Voted', percent: 'Percentages' }].concat(this.resultsList);
            for(let i = 0; i < this.resultsList.length; i++) {
                let row = this.table.querySelector('tr').cloneNode(true);
                let data = row.querySelectorAll('td');
                if(i === 0) {
                    row.id = 'title-row';
                    data[3].textContent = this.resultsList[0].percent;
                }
                else {
                    data[3].textContent = parseInt(parseInt(this.resultsList[i].votes) / parseInt(this.resultsList[i].shown) * 100) + '%';
                }
                data[0].textContent = this.resultsList[i].name;
                data[0].id = 'title-item';
                data[1].textContent = this.resultsList[i].shown;
                data[2].textContent = this.resultsList[i].votes;
                this.table.appendChild(row);
            }
        }
    }

    render() {
        const dom = resultsTemplate.content;
        this.table = dom.querySelector('tbody');

        this.setResults();

        return dom;
    }
}