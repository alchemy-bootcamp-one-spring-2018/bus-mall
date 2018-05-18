/* globals pictures Random PictureDisplay Results */
/* exported App */
const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.pictures = pictures;
        this.random = new Random(this.pictures);
        this.totalVotes = 0;
        this.completed = window.localStorage.getItem('completed');
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
                this.results = new Results(this.pictures, this.totalVotes);
                this.results.tally();
                if(this.totalVotes >= 25) {
                    this.completed = true;
                    window.localStorage.setItem('completed', this.completed);
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

        this.picturesSection = dom.getElementById('picture-section');

        this.setPictures();

        return dom;
    }
}