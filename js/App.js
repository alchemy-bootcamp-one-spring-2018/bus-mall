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
        if(this.completed) {
            return;
        }
        const pics = this.random.randomize();
        for(let i = 0; i < pics.length; i++) {
            pics[i].shown++;
        }

        if(!this.pictureDisplay) {
            this.pictureDisplay = new PictureDisplay(pics, pic => {
                this.totalVotes++;
                pic.votes++;
                if(this.totalVotes === 25) {
                    this.completed = true;
                    this.results = new Results(this.pictures);
                    this.resultsSection.appendChild(this.results.render());
                }
                else {
                    this.setPictures();
                }
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