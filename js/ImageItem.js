/* exported ImageItem */

class ImageItem {

    constructor(product, handlePictureClicked) {
        this.product = product;
        this.handlePictureClicked = handlePictureClicked;
    }

    // render this image and append it to rootElement
    render(rootElement) {
        let newImageElement = document.createElement('img');
        newImageElement.src = 'img/' + this.product.imageName;
        newImageElement.style.height = '200px';
        rootElement.appendChild (newImageElement);
        newImageElement.addEventListener('click', () => {
            this.handlePictureClicked(this.product);
        });
    }
}