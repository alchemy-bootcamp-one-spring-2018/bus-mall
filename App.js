/* globals ImageViewer, imageArray */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.imageArray = imageArray;
    }

    render() {
        const dom = appTemplate.content;

        const imageViewerSection = dom.getElementById('image-viewer');
        const imageViewerComponent = new ImageViewer(this.imageArray);
        const imageDom = imageViewerComponent.render();
        imageViewerSection.appendChild(imageDom);

        return dom;
    }
}