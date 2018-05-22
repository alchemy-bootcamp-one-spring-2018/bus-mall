/* globals ViewingReport, ViewingChart, pictures, clearPicturesData */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.pictures = pictures;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearPicturesData();
            window.location.reload();
        });

        const viewingReportSection = dom.getElementById('viewing-report');
        const viewingReportComponent = new ViewingReport(this.pictures);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        const viewingChartSection = dom.getElementById('viewing-chart');
        const viewingChartComponent = new ViewingChart(this.pictures);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);

        return dom;
    }
}