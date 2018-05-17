/* exported ImageViewer */

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {

    constructor(product) {
        this.product = product;
    }

    update(product) {
        this.product = product;

        this.header.textContent = this.product.name;
        this.imageMaker.src = this.product.img;
    }

    render() {
        const dom = imageViewerTemplate;

        this.header = dom.querySelector('h2');
        this.imageMaker = dom.querySelector('img');

        this.update(this.product);

        return dom;
    }
}