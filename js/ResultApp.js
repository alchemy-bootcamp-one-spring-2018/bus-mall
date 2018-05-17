/* globals Result, productList, ResultChart */
/* exported ResultApp */

const appTemplate = document.getElementById('app-template');

class ResultApp {
    constructor() {
        this.list = productList;
        
    }


    render() {
        const dom = appTemplate.content;

        const resultSection = dom.getElementById('result');
        const resultComponent = new Result(this.list);
        resultSection.appendChild(resultComponent.render());
        
        const resultChartSection = dom.getElementById('result-chart');
        const resultChartComponent = new ResultChart(this.list);
        resultChartSection.appendChild(resultChartComponent.render());
        
        return dom;
    }

    
}
