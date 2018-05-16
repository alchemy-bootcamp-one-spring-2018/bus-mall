/* exported ImageViewer */

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {

    constructor(product) {
        this.product = product;
    }

    update(product) {
        this.product = product;

        this.header.textContent - this.product.name;
        this.imageViewer.src = this.product.image;
    }

    render() {
        const dom = imageViewerTemplate;

        this.header = dom.querySelector('h2');
        this.imageViewer = dom.querySelector('image');

        this.update(this.product);

        return dom;
    }
}