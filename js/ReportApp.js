/* globals ViewingReport, pictureArray */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.pictureArray = pictureArray;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const viewingReportSection = dom.getElementById('viewing-report');
        const viewingReportComponent = new ViewingReport(this.pictureArray);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        return dom;
    }
}