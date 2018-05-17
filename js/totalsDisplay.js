const totalsDisplayReport = document.getElementById('totals-display-template').content;

class TotalsDisplayReport {
    constructor(items){
        this.items = items;
    }

    render(){
        const dom = totalsDisplayReport.cloneNode(true);
        console.log('dom in totals display', dom);

        this.tableBody = dom.querySelector('tbody');
        
        for(let i = 0;i < this.items.length; i++){
            const displayComponent = new TotalsReport(this.items[i]);
            this.tableBody.appendChild(displayComponent.render());
        }
        console.log('this is this', this);
        return dom;
    }
}