/* exported ResultChart */
/* globals Chart */
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
        const sortedList = this.list;
        this.bubbleSort(sortedList, 'clicks');
        let labels = [];
        let clicks = [];
        let views = [];
        let percentage = [];
        for(let i in sortedList) {
            const product = sortedList[i];
            labels.push(product.name);
            clicks.push(product.clicks);
            views.push(product.views);
            percentage.push(product.percentage);
        }

        this.chart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Clicks',
                    data: clicks,
                    backgroundColor: [
                        'rgba(4, 192, 255, .5)',
                        'rgba(255, 202, 0, .5)',
                        'rgba(0, 110, 147, .5)',
                        'rgba(255, 0, 50, .5)',
                        'rgba(4, 192, 255, .5)',
                        'rgba(255, 202, 0, .5)',
                        'rgba(0, 110, 147, .5)',
                        'rgba(255, 0, 50, .5)',
                        'rgba(4, 192, 255, .5)',
                        'rgba(255, 202, 0, .5)',
                        'rgba(0, 110, 147, .5)',
                        'rgba(255, 0, 50, .5)',
                        'rgba(4, 192, 255, .5)',
                        'rgba(255, 202, 0, .5)',
                        'rgba(0, 110, 147, .5)',
                        'rgba(255, 0, 50, .5)',
                        'rgba(4, 192, 255, .5)',
                        'rgba(255, 202, 0, .5)',
                        'rgba(0, 110, 147, .5)',
                        'rgba(255, 0, 50, .5)'
                        
                    ],
                    
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)'
                    ],
                    hoverBorderColor: [
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                        'rgba(0, 0, 0, .5)',
                    ],
                    hoverBorderWidth: 2
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


    bubbleSort(array, prop) {
        let swapped = true;
        while(swapped === true) {
            swapped = false;
            for(let i = 1; i < array.length; i++) {
                if(array[i - 1][prop] < array[i][prop]) {
                    let temp;
                    temp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = temp;
                    swapped = true;
                }
            }
        }
        return array;
    }
}
