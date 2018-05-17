/* globals Chart */
/* exported Results */
const resultsTemplate = document.getElementById('results-template').content;

class Results {

    constructor(pictures) {
        this.pictures = pictures;
    }

    render() {
        const dom = resultsTemplate;

        // const container = dom.querySelector('span');

        let tempList = this.pictures.filter(a => a.shown > 0);
        let dataList = [];
        for(let i = 0; i < tempList.length; i++) {
            let pic = tempList[i];
            let percentage = parseInt((pic.votes / pic.shown).toFixed(2) * 100);
            let randomR = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            let randomG = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            let randomB = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            dataList.push([pic.name, percentage, '#' + randomR + randomG + randomB]);
            // colorList.push('#000000');
            // container.innerHTML += pic.name + ' ||| xShown: ' + pic.shown + ' ||| xVoted: ' + pic.votes + ' ||| ' + percentage + '%<br>';
        }

        console.log(dataList);

        // Draw chart
        new Chart(dom.getElementById('myChart'), {
            type: 'horizontalBar',
            responsive: true,
            maintainAspectRatio: false,
            data: {
                labels: dataList.map(a => a[0]),
                datasets: [
                    {
                        label: 'Percentages voted',
                        backgroundColor: dataList.map(a => a[2]),
                        data: dataList.map(a => a[1])
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Percentages of times voted base on how many times shown'
                }
            }
        });

        return dom;
    }
}