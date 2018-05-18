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
        const copy = this.products.slice();
        for(var i = 0; i < 3; i++) {
            const randomImage = getRandomImage(copy);
            randomImage.timesShown++;
            displayImages.push(randomImage);
        }
        return displayImages;
    }

    render() {
        const dom = appTemplate.content;
        
        // Image Display rendering
        const addDisplaySection = dom.getElementById('image-display');
        const addDisplayComponent = new ImageDisplay(this.getThreeRandomImages(), (image) => {
            // Anonymous functions becomes userVoted inside of ImageDisplay.js
            this.totalVotes++;
            image.timesVoted++;
            addDisplayComponent.update(this.getThreeRandomImages());
            addResultsComponent.update(this.products);
            console.log('userVoted - totals, thisImage', this.totalVotes, image);
            
        });
        addDisplaySection.appendChild(addDisplayComponent.render());
        
        
        
        // Results Display rendering
        const addResultsSection = dom.getElementById('results-display');
        const addResultsComponent = new ResultsDisplay();
        addResultsSection.appendChild(addResultsComponent.render());

        return dom;
    }
    
}