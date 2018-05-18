/* globals Chart */
/* exported ViewingChart */
const viewingChartTemplate = document.getElementById('chart-template').content;

class ViewingChart {
    constructor(objectArray) {
        this.objectArray = objectArray;
    }

    render() {
        const dom = viewingChartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        

        let labels = [];
        let data = [];

        for(let i = 0; i < this.objectArray.length; i++) {
            const object = this.objectArray[i];
            labels.push(object.name);
            data.push(object.clicks);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of times Selected',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(54, 162, 235, 0.75)',
                        'rgba(216, 147, 169, 0.75)',
                        'rgba(135, 62, 224, 0.75)',
                        'rgba(106, 209, 195, 0.75)',
                        'rgba(216, 91, 56, 0.75)',
                        'rgba(94, 6, 0, 0.75)',
                        'rgba(254, 74, 73, 0.75)',
                        'rgba(253, 240, 213, 0.75)',
                        'rgba(216, 91, 56, 0.75)',
                        'rgba(216, 30, 91, 0.75)',
                        'rgba(91, 192, 235, 0.75)',
                        'rgba(194, 249, 187, 0.75)',
                        'rgba(38, 196, 133, 0.75)',
                        'rgba( 50, 144, 143, 0.75)',
                        'rgba(224, 202, 60, 0.75)',
                        'rgba(255, 184, 111, 0.75)',
                        'rgba(248, 255, 229, 0.75)',
                        'rgba(213, 96, 98, 0.75)',
                        'rgba(255, 206, 86, 0.75)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,3)',
                        'rgba(54, 162, 235, 3)',
                        'rgba(216, 147, 169, 3)',
                        'rgba(135, 62, 224, 3)',
                        'rgba(106, 209, 195, 3)',
                        'rgba(216, 91, 56, 3)',
                        'rgba(94, 6, 0, 3)',
                        'rgba(254, 74, 73, 3)',
                        'rgba(253, 240, 213, 3)',
                        'rgba(216, 91, 56, 3)',
                        'rgba(216, 30, 91, 3)',
                        'rgba(91, 192, 235, 3)',
                        'rgba(194, 249, 187, 3)',
                        'rgba(38, 196, 133, 3)',
                        'rgba( 50, 144, 143, 3)',
                        'rgba(224, 202, 60, 3)',
                        'rgba(255, 184, 111, 3)',
                        'rgba(248, 255, 229, 3)',
                        'rgba(213, 96, 98, 3)',
                        'rgba(255, 206, 86, 3)'
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