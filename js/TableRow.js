/* exported TableRow */

const rowTemplate = document.getElementById('table-row-template').content;

class TableRow {

    constructor(product) {
        this.product = product;
    }

    // create a new table row for this product and return it
    render() {
        const newRow = rowTemplate.cloneNode(true);
        const columns = newRow.querySelectorAll('td');
        columns[0].textContent = this.product.productName;
        columns[1].textContent = this.product.timesPresented;
        columns[2].textContent = this.product.timesChosen;
        return newRow;

    }
}