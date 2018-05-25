/* exported ProductImage */

const figureTemplate = document.getElementById('product-image-template').content;

class ProductImage {

    constructor(product, handlePictureClicked) {
        this.product = product;
        this.handlePictureClicked = handlePictureClicked;
    }

    // render this image and append it to rootElement
    render() {
        const dom = figureTemplate.cloneNode(true);
        const imageElement = dom.querySelector('img');
        const captionElement = dom.querySelector('figcaption');
        imageElement.src = 'img/' + this.product.imageName;
        imageElement.addEventListener('click', () => {
            this.handlePictureClicked(this.product);
        });
        captionElement.textContent = this.product.productName;
        return dom;
    }
}