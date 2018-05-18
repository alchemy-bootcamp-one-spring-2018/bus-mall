
/* exported ReportApp */

const appTemplate = document.getElementById('app-template').content;

class ReportApp {
    constructor() {
        this.items = items;

    }

    render() {
        const dom = appTemplate;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearItemData();
            window.location.reload();
        })

        const totalsReportSection = dom.getElementById('totals-report');
        const totalsReportComponent = new TotalsDisplayReport(this.items);
        const totalsReportDom = totalsReportComponent.render();
        totalsReportSection.appendChild(totalsReportDom);

        const totalsChartSection = dom.getElementById('totals-chart');
        const totalsChartComponent = new ItemsChart(this.items);
        const totalsChartDom = totalsChartComponent.render();
        totalsChartSection.appendChild(totalsChartDom);

        return dom;
    }
}