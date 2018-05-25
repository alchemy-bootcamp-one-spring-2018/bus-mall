/* globals Chart */
/* exported ChartContainer */

const chartTemplate = document.getElementById('chart-template').content;

class ChartContainer {
    constructor(products) {
        this.products = products;
    }

    render() {
        const dom = chartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        let colors = [];

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            labels.push(product.productName);
            data.push(product.timesChosen);
            colors.push(product.chartColor);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 1,
                            min: 0,
                            beginAtZero:true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            stepSize: 1,
                            min: 0,
                            autoSkip: false
                        }
                    }]
                }
            }
        });
        return dom;

    }
}