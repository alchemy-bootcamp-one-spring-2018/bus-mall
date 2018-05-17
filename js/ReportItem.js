/* exported ReportItem */

const rowTemplate = document.getElementById('result-row-template').content;

class ReportItem {

    constructor(image) {
        this.image = image;
    }

    // create a new report row for this image and append it to rootElement
    render(rootElement) {
        const newRow = rowTemplate.cloneNode(true);
        const columns = newRow.querySelectorAll('td');
        columns[0].textContent = this.image.productName;
        columns[1].textContent = this.image.timesPresented;
        columns[2].textContent = this.image.timesChosen;
        rootElement.appendChild(newRow);

    }
}