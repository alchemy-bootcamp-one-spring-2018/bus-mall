/* globals pictures Random PictureDisplay Results */
/* exported App */
const appTemplate = document.getElementById('app-template');

window.onunload = function() {
    localStorage.setItem('lastPic', true);
};

class App {

    constructor() {
        this.pictures = pictures;
        this.random = new Random(this.pictures);
        this.totalVotes = 0;
        this.completed = window.localStorage.getItem('completed');
    }

    setPictures() {
        if(localStorage.getItem('lastPic') === 'true') {
            this.pics = JSON.parse(localStorage.getItem('pics'));
        }
        else {
            this.pics = this.random.randomize();
        }

        for(let i = 0; i < this.pics.length; i++) {
            this.pics[i].shown++;
        }

        if(!this.pictureDisplay) {
            this.pictureDisplay = new PictureDisplay(this.pics, pic => {
                if(this.completed) {
                    return;
                }
                localStorage.setItem('lastPic', false);
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
            this.pictureDisplay.update(this.pics);
        }
    }

    render() {
        const dom = appTemplate.content;

        this.picturesSection = dom.getElementById('picture-section');

        this.setPictures();

        return dom;
    }
}