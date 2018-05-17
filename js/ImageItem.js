/* exported ImageItem */

class ImageItem {

    constructor(product) {
        this.product = product;
    }

    // render this image and append it to rootElement
    render(rootElement) {
        this.product.timesPresented++; // increment presented
        let newImageElement = document.createElement('img');
        newImageElement.src = 'img/' + this.product.imageName;
        newImageElement.style.height = '200px';
        newImageElement.classList.add('pic');
        rootElement.appendChild (newImageElement);
        newImageElement.addEventListener('click', () => {
            this.product.timesChosen++; // increment chosen
        });
    }
}