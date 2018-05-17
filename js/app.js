/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.items = items;
    }

    render() {
        const dom = appTemplate;



        const displayImageSelection = dom.getElementById('displayed-images');
        const imageViewerComponent = new ItemDisplay(acquireRandomItems(), (items) => {
            
        });
        const imageDom = imageViewerComponent.render();
        displayImageSelection.appendChild(imageDom);

        return dom;
    }
}