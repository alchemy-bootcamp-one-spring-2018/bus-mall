/* globals PictureReport */
/* exported ViewingReport */

const viewingReportTemplate = document.getElementById('viewing-report-template').content;

class ViewingReport {
    constructor(pictureArray) {
        this.pictureArray = pictureArray;
    }

    render() {
        const dom = viewingReportTemplate;

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.pictureArray.length; i++) {
            const reportComponent = new PictureReport(this.pictureArray[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
        return dom;
    }
}