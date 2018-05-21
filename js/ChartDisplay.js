/* globals Chart */
/* exported ChartDisplay */
const chartTemplate = document.getElementById('chart-template');

class ChartDisplay {

    constructor(dataList) {
        this.dataList = dataList;
    }

    setChart() {
        if(this.dataList.length !== 0) {
            // Draw chart
            new Chart((this.chart), {
                type: 'horizontalBar',
                responsive: true,
                data: {
                    labels: this.dataList.map(a => a[0]),
                    datasets: [
                        {
                            label: 'Percentages voted',
                            backgroundColor: this.dataList.map(a => a[2]),
                            data: this.dataList.map(a => a[1])
                        }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{ ticks: { max: 100, min: 0 } }]
                    },
                    legend: {
                        display: false,
                    },
                    title: {
                        labels: {
                            fontColor: '#FFF'
                        },
                        display: true,
                        text: 'Percentages of times voted base on how many times shown'
                    }
                }
            });
        }
    }

    render() {
        const dom = chartTemplate.content;
        this.chart = dom.getElementById('myChart');

        this.setChart();

        return dom;
    }
}