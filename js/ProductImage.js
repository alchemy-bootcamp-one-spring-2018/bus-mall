/* exported ProductImage */

class ProductImage {

    constructor(product, handlePictureClicked) {
        this.product = product;
        this.handlePictureClicked = handlePictureClicked;
    }

    // render this image and append it to rootElement
    render() {
        let dom = document.createElement('img');
        dom.src = 'img/' + this.product.imageName;
        dom.style.height = '200px';
        dom.addEventListener('click', () => {
            this.handlePictureClicked(this.product);
        });
        return dom;
    }
}