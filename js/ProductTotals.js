/*  */

const productTotalsTemplate = document.getElementById('product-totals-report-template').content;

class productTotals {
    constructor(product) {
        this.product = product;
    }

    render() {
        const dom = productTotalsTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.product.name;
        columns[1].textContent = this.product.views;
        columns[2].textContent = this.product.votes;
        return dom;
    }
}