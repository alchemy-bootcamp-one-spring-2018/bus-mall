const itemsChartTemplate = document.getElementById('items-chart-template').content;

class ItemsChart {
    constructor(items) {
        this.items = items;
    }

    render() {
        const dom = itemsChartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let names = [];
        let votes = [];
        let views = [];

        for(let i = 0; i < this.items.length; i++){
            const item = this.items[i];
            names.push(item.name);
            votes.push(item.votes);
            views.push(item.views);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 206, 0, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(247, 75, 6, 0.2)',
                        'rgba(98, 102, 235, 0.2)',
                        'rgba(8, 255, 132, 0.2)',
                        'rgba(0, 0, 235, 0.2)',
                        'rgba(255, 206, 8, 0.2)',
                        'rgba(255, 0, 255, 0.2)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 206, 0, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(247, 75, 6, 0.6)',
                        'rgba(98, 102, 235, 0.6)',
                        'rgba(8, 255, 132, 0.6)',
                        'rgba(0, 0, 235, 0.6)',
                        'rgba(255, 206, 8, 0.6)',
                        'rgba(255, 0, 255, 0.6)',
                    ],
                    borderColor: [],
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