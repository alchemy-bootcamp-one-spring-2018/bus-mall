/* exported ReportItem */

const rowTemplate = document.getElementById('result-row-template').content;

class ReportItem {

    constructor(product) {
        this.product = product;
    }

    // create a new report row for this product and append it to rootElement
    render(rootElement) {
        const newRow = rowTemplate.cloneNode(true);
        const columns = newRow.querySelectorAll('td');
        columns[0].textContent = this.product.productName;
        columns[1].textContent = this.product.timesPresented;
        columns[2].textContent = this.product.timesChosen;
        rootElement.appendChild(newRow);

    }
}