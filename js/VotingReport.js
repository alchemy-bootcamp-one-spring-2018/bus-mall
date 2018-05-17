/* exported VotingReport */

const votingReportTemplate = document.getElementById('voting-report-template').content;

class VotingReport {
    constructor(productArray) {
        this.productArray = productArray;

    }

    update(productArray) {
        this.productArray = productArray;

        while(this,tableBody.lastElementChild) {
            this.tableBody.lastElementChild.remove();
        }

        for(let i = 0; i < this.productArray.length; i++) {
            const reportComponent = new ProductReport(this.productArray[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
    }

    render() {
        const dom = votingReportTemplate;

        const header = dom.querySelector('h2');
        const table = dom.querySelector('table');

        header.addEventListener('click', () => {
            header.classList.toggle('expanded');
            table.classList.toggle('hidden');

        });

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.productArray.length; i++) {
            const reportComponent = new VotingReport(this.productArray[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

        return dom;
    }