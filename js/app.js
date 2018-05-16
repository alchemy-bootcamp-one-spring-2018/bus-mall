/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.items = items;
    }

    randomImages() {
        
    }

    render() {
        const dom = appTemplate;

        const displayImageSelection = dom.getElementById('displayed-images');
        const imageViewerComponent = new ItemDisplay(this.items[getRandomNumber(items.length)]);
        const imageDom = imageViewerComponent.render();
        displayImageSelection.appendChild(imageDom);

        return dom;
    }
}