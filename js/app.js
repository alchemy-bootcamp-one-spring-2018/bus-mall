/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.items = items;
    }

    render() {
        const dom = appTemplate;

        const displayImageSelection = dom.getElementById('displayed-images');
        const imageViewerComponent = new ItemDisplay(acquireRandomItems(), (item) => {
        //My this.update was inside of here, but it never worked.
            item.votes++;
            console.log(item.name + ' has ' + item.votes + ' votes');
            imageViewerComponent.update(acquireRandomItems());
        });
        const imageDom = imageViewerComponent.render();
        displayImageSelection.appendChild(imageDom);

        return dom;
    }
}