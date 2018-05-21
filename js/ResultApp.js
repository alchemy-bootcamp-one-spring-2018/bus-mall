/* globals Result, productList, ResultChart, clearProductsData */
/* exported ResultApp */

const appTemplate = document.getElementById('app-template');

class ResultApp {
    constructor() {
        this.list = productList;
    }


    render() {
        const dom = appTemplate.content;

        const resultChartSection = dom.getElementById('result-chart');
        const resultChartComponent = new ResultChart(this.list);
        resultChartSection.appendChild(resultChartComponent.render());

        const resultSection = dom.getElementById('result');
        const resultComponent = new Result(this.list);
        resultSection.appendChild(resultComponent.render());
        
        const button = dom.getElementById('clear-results');
        button.addEventListener('click', () => {
            clearProductsData();
            window.location.reload();
        });

        return dom;
    }

    
}
