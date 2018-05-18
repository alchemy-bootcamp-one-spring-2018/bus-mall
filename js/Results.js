/* globals */
/* exported Results */

class Results {

    constructor(pictures, totalVotes) {
        this.pictures = pictures;
        this.totalVotes = totalVotes;
    }

    tally() {
        let tempList = this.pictures.filter(a => a.shown > 0);
        let dataList = [];
        for(let i = 0; i < tempList.length; i++) {
            let pic = tempList[i];
            let percentage = parseInt((pic.votes / pic.shown).toFixed(2) * 100);
// FANCY SHIT
            let color;
            if(percentage < 33) {
                color = '#FF0000';
            }
            else if(percentage < 66) {
                color = '#0000FF';
            }
            else {
                color = '#00FF00';
            }
            dataList.push([pic.name, percentage, color]);
            // let randomR = '00';
            // let randomG = parseInt(percentage * 2).toString(16).toUpperCase();
            // let randomB = parseInt(200 - (percentage * 2)).toString(16).toUpperCase();
            // console.log('r', randomR, 'g', randomG, 'b', randomB);
            // dataList.push([pic.name, percentage, '#' + randomR + randomG + randomB]);
        }

        window.localStorage.setItem('resultsList', JSON.stringify(tempList));
        window.localStorage.setItem('dataList', JSON.stringify(dataList));
        window.localStorage.setItem('totalVotes', this.totalVotes);
    }
}