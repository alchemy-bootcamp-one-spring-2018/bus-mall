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
            let percentage = (pic.votes / pic.shown).toFixed(2) * 100;
            container.innerHTML += pic.name + ' ||| xShown: ' + pic.shown + ' ||| xVoted: ' + pic.votes + ' ||| ' + percentage + '%<br>';
        }

        return dom;
    }


    // for(let) {
    //     let pic = pictureArray[i];
    //     let percent = (pic.vote / pic.shown * 100);
    //     if(pic.shown === 0) {
    //         continue;
    //     }
    //     res.innerHTML += '<strong>Name:</strong> ' + pic.name + '<br> <span class="underline"><strong>xShown:</strong> ' + pic.shown + '| <strong>xVoted:</strong> ' + pic.vote + '| <strong>Percentage:</strong> ' + percent.toFixed(2) + '%</span><br>';
    // }

    // res.parentElement.style.display = 'block';
}