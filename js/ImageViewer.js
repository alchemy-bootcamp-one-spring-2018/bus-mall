/* exported ImageViewer */

// note for Sarah
// create image code from fruit stand project below. 
// incorporate in place of existing code?

// createImg: function() {
//     var img = document.createElement('img');
//     img.setAttribute('src', this.image);
//     return img;
// }

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {

    constructor(product) {
        this.product = product;
    }

    update(product) {
        this.product = product;

        this.header.textContent = this.product.name;
        this.imageMaker.src = this.product.image;
    }

    render() {
        const dom = imageViewerTemplate;

        this.header = dom.querySelector('h2');
        this.imageMaker = dom.querySelector('img');

        this.update(this.product);

        return dom;
    }
}

