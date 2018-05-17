/* globals */
/* exported Results */
const resultsTemplate = document.getElementById('results-template').content;

class Results {

    constructor(pictures) {
        this.pictures = pictures;
    }

    render() {
        const dom = resultsTemplate;

        const container = dom.querySelector('span');

        let tempList = this.pictures.filter(a => a.shown > 0);
        for(let i = 0; i < tempList.length; i++) {
            let pic = tempList[i];
            let percentage = parseInt((pic.votes / pic.shown).toFixed(2) * 100);
            container.innerHTML += pic.name + ' ||| xShown: ' + pic.shown + ' ||| xVoted: ' + pic.votes + ' ||| ' + percentage + '%<br>';
        }

        return dom;
    }
}