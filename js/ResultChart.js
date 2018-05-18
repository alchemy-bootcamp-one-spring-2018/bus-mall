/* exported ResultChart */
'use strict';

const resultChartTemplate = document.getElementById('result-chart-template');

class ResultChart {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = resultChartTemplate.content;
  
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i in this.list) {
            const product = this.list[i];
            labels.push(product.name);
            data.push(product.clicks);
        }

        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Clicks',
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
                    borderWidth: 0
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