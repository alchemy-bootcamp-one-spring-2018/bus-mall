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
        const sortedList = this.list;
        this.bubbleSort(sortedList, 'clicks');
        let labels = [];
        let data = [];
        console.log(sortedList);
        for(let i in sortedList) {
            const product = sortedList[i];
            labels.push(product.name);
            data.push(product.clicks);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Clicks',
                    data: data,
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
                        'rgba(255, 0, 50, .5)',
                        
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
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
