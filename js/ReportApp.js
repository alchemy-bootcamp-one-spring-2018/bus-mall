/* globals ViewingReport, pictures */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.pictures = pictures;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const viewingReportSection = dom.getElementById('viewing-report');
        const viewingReportComponent = new ViewingReport(this.pictures);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        return dom;
    }
}