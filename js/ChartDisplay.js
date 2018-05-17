/* globals Chart */
/* exported ChartDisplay */
const chartTemplate = document.getElementById('chart-template');

class ChartDisplay {

    constructor(dataList) {
        this.dataList = dataList;
    }

    render() {
        const dom = chartTemplate.content;
        const message = dom.querySelector('span');
        if(localStorage.length !== 0) {
            const chart = dom.getElementById('myChart');
            message.textContent = '';
            new Chart(chart, {
                type: 'horizontalBar',
                data: {
                    labels: this.dataList.map(a => a[0]),
                    datasets: [
                        {
                            label: '%',
                            backgroundColor: this.dataList.map(a => a[2]),
                            data: this.dataList.map(a => a[1])
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