/* globals PictureReport */
/* exported ViewingReport */

const viewingReportTemplate = document.getElementById('viewing-report-template').content;

class ViewingReport {
    constructor(pictures) {
        this.pictures = pictures;
    }

    render() {
        const dom = viewingReportTemplate;

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.pictures.length; i++) {
            const reportComponent = new PictureReport(this.pictures[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
        return dom;
    }
}