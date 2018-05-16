/* globals ImageViewer, images */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = images;
    }

    render() {
        const dom = appTemplate.content;

        const imageViewerSection = dom.getElementById('image-viewer');
        const imageViewerComponent = new ImageViewer(this.images[0]);
        const imageDom = imageViewerComponent.render();
        imageViewerSection.appendChild(imageDom);

        return dom;
    }
}