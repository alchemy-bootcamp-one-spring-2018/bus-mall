/* globals Chart */
/* exported ChartDisplay */
const chartTemplate = document.getElementById('chart-template');

class ChartDisplay {

    constructor(dataList) {
        this.dataList = JSON.parse(dataList);
    }

    render() {
        const dom = chartTemplate.content;
        const message = dom.querySelector('span');
        if(localStorage) {
            const chart = dom.getElementById('myChart');
            console.log(this.dataList);
            message.textContent = '';
            console.log(chart);
            new Chart(chart, {
                type: 'horizontalBar',
                data: {
                    labels: this.dataList[0],
                    datasets: [
                        {
                            label: '%',
                            backgroundColor: this.dataList[2],
                            data: this.dataList[1]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Percentges of pictures voted on based on how many times they were shown'
                    }
                }
            });
            dom.appendChild(message);
            return dom;
        }
        message.textContent = 'PLEASE VOTE ON SOME PICTURES TO SEE RESULTS';
        dom.appendChild(message);
        return dom;
    }
}