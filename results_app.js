/* exported App */

/* globals Results productList clearProductData ViewingChart*/

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    
    constructor() {
        this.list = productList;
    }

    render() {
        
        const dom = appTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearProductData();
            window.location.reload();
        });


        const resultsSection = dom.getElementById('results');
        const resultsComponent = new Results(this.list);
        resultsSection.appendChild(resultsComponent.render());

        const viewingChartSection = dom.getElementById('results');
        const viewingChartComponent = new ViewingChart(this.list);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);
        
        return dom;
    }  
}


