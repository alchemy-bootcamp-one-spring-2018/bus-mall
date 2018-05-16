/* globals ImageDisplay ResultsDisplay imageArray getRandomImage */
/*exported App */

const appTemplate = document.getElementById('app-template');

class App {

    constructor() {
        this.products = imageArray;
        this.totalVotes = 0;
    }

    getThreeRandomImages() {
        const displayImages = [];

        for(var i = 0; i < 3; i++) {
            displayImages.push(getRandomImage(this.products));
        }
       //console.log('displayImages ', displayImages);
        return displayImages;
    }

    render() {
        const dom = appTemplate.content;

        const addDisplaySection = dom.getElementById('image-display');
        const addDisplayComponent = new ImageDisplay((image) => {
            // Anonymous functions becomes userVoted inside of ImageDisplay.js
            console.log('this is add to timesVoted', image);
            this.totalVotes++;
            image.timesVoted++;
            console.log('userVoted - totals, thisImage',this.totalVotes,image);
        });
        addDisplaySection.appendChild(addDisplayComponent.render(this.getThreeRandomImages()));

        
        const addResultsSection = dom.getElementById('results-display');
        const addResultsComponent = new ResultsDisplay();
        addResultsSection.appendChild(addResultsComponent.render());

        return dom;
    }
}