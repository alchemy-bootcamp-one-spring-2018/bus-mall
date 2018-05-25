/* exported productArray ResultsChart  */
/* globals clearProductsArray  */
'use strict';
const chartTemplate = document.getElementById('results-chart-template').content;

class ResultsChart {
    constructor(resultsList) {
        this.resultsList = resultsList;
    }
    
    render() {
        const dom = chartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.resultsList.length; i++) {
            const product = this.resultsList[i];
            labels.push(product.name);
            data.push(product.clicks);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 77, 0, 1)',
                        'rgba(255, 153, 0, 1)',
                        'rgba(204, 255, 0, 1)',
                        'rgba(128, 255, 0, 1)',
                        'rgba(51, 255, 0, 1)',
                        'rgba(0, 255, 26, 1)',
                        'rgba(0, 255, 102, 1)',
                        'rgba(0, 255, 179, 1)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 179, 255, 1)',
                        'rgba(0, 102, 255, 1)',
                        'rgba(0, 26, 255, 1)',
                        'rgba(51, 0, 255, 1)',
                        'rgba(128, 0, 255, 1)',
                        'rgba(204, 0, 255, 1)',
                        'rgba(255, 0, 230, 1)',
                        'rgba(255, 0, 153, 1)',
                        'rgba(255, 0, 76, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        return dom;
    }
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', (productArray) => {
    clearProductsArray();
});