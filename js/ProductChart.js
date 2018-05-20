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
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',

                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',

                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',

                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                        'rgba(0, 74, 124, 0.7)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 2000,
                    easing: 'linear'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) { if(Number.isInteger(value)) { return value; } }, //source: stack-overflow
                            stepSize: 1
                        }
                    }]
                },
            },
        });

        return dom;
    }

}