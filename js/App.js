/* globals pictures Random PictureDisplay Results */
/* exported App */
const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.pictures = pictures;
        this.random = new Random(this.pictures);
        this.totalVotes = 0;
    }

    setPictures() {
        const pics = this.random.randomize();
        for(let i = 0; i < pics.length; i++) {
            pics[i].shown++;
        }

        if(!this.pictureDisplay) {
            this.pictureDisplay = new PictureDisplay(pics, pic => {
                if(this.completed) {
                    return;
                }
                this.totalVotes++;
                pic.votes++;
                this.results = new Results(this.pictures);
                this.results.tally();
                if(this.totalVotes === 25) {
                    this.completed = true;
                }
                this.setPictures();
            });
            this.picturesSection.appendChild(this.pictureDisplay.render());
        }
        else {
            this.pictureDisplay.update(pics);
        }
    }

    render() {
        const dom = appTemplate.content;

        this.resultsSection = dom.getElementById('results-section');

        this.picturesSection = dom.getElementById('picture-section');

        this.setPictures();

        return dom;
    }
}