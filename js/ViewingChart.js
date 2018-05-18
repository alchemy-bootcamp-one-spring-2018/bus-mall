/* globals Chart */
/* exported ViewingChart */

const viewingChartTemplate = document.getElementById('viewing-chart-template').content;

class ViewingChart {
    constructor(pictures) {
        this.pictures = pictures;
    }

    render() {
        const dom = viewingChartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.pictures.length; i++) {
            const picture = this.pictures[i];
            labels.push(picture.name);
            data.push(picture.selectCount);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(138, 205, 234, 0.2)',
                        'rgba(116, 109, 117, 0.2)',
                        'rgba(140, 72, 67, 0.2)',
                        'rgba(158, 100, 60, 0.2)',
                        'rgba(237, 230, 242, 0.2)',
                        'rgba(237, 174, 73, 0.2)',
                        'rgba(209, 73, 91, 0.2)',
                        'rgba(0, 121, 140, 0.2)',
                        'rgba(48, 99, 142, 0.2)',
                        'rgba(0, 61, 91, 0.2)',
                        'rgba(234, 196, 53, 0.2)',
                        'rgba(52, 89, 149, 0.2)',
                        'rgba(3, 206, 164, 0.2)',
                        'rgba(251, 77, 61, 0.2)',
                        'rgba(202, 21, 81, 0.2)',
                        'rgba(142, 177, 199, 0.2)',
                        'rgba(176, 46, 12, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(138, 205, 234, 1)',
                        'rgba(116, 109, 117, 1)',
                        'rgba(140, 72, 67, 1)',
                        'rgba(158, 100, 60, 1)',
                        'rgba(237, 230, 242, 1)',
                        'rgba(237, 174, 73, 1)',
                        'rgba(209, 73, 91, 1)',
                        'rgba(0, 121, 140, 1)',
                        'rgba(48, 99, 142, 1)',
                        'rgba(0, 61, 91, 1)',
                        'rgba(234, 196, 53, 1)',
                        'rgba(52, 89, 149, 1)',
                        'rgba(3, 206, 164, 1)',
                        'rgba(251, 77, 61, 1)',
                        'rgba(202, 21, 81, 1)',
                        'rgba(142, 177, 199, 1)',
                        'rgba(176, 46, 12, 1)'
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