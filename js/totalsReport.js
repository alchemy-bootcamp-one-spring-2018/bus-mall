/* exported Viewing Report */

const totalsReportTemplate = document.getElementById('totals-report-template');

class TotalsReport {
    constructor(items){
        this.items = items;
    }

    render(){

        const dom = totalsReportTemplate.cloneNode(true).content;
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.items.name;
        columns[1].textContent = this.items.views;
        columns[2].textContent = this.items.votes;

        return dom;

    }
}