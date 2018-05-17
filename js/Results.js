/* globals */
/* exported Results */

class Results {

    constructor(pictures) {
        this.pictures = pictures;
    }

    tally() {
        let tempList = this.pictures.filter(a => a.shown > 0);
        let dataList = [];
        for(let i = 0; i < tempList.length; i++) {
            let pic = tempList[i];
            let percentage = parseInt((pic.votes / pic.shown).toFixed(2) * 100);
            let randomR = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            let randomG = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            let randomB = parseInt((Math.random() * 100) + 150).toString(16).toUpperCase();
            dataList.push([pic.name, percentage, '#' + randomR + randomG + randomB]);
        }

        console.log(dataList);
        window.localStorage.setItem('dataList', JSON.stringify(dataList));
    }
}