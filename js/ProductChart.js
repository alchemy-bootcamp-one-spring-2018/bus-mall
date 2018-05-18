/* exported ProductChart */
/* globals Chart */
'use strict';

const productChartTemplate = document.getElementById('product-chart-template').content;

class ProductChart {
    constructor(imagesData) {
        this.imagesData = imagesData;
    }

    render() {
        const dom = productChartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.imagesData.length; i++) {
            const product = this.imagesData[i];
            labels.push(product.name);
            data.push(product.votes);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',

                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',

                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',

                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
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
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        return dom;
    }

}