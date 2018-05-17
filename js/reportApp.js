
/* exported ReportApp */

const appTemplate = document.getElementById('app-template').content;

class ReportApp {
    constructor() {
        this.items = items;

    }

    render() {
        const dom = appTemplate;
        
        const totalsReportSection = dom.getElementById('totals-report');
        const totalsReportComponent = new TotalsDisplayReport(this.items);
        console.log(this.items);
        const totalsReportDom = totalsReportComponent.render();
        totalsReportSection.appendChild(totalsReportDom);

        return dom;
    }
}