/* exported ImageItem */

class ImageItem {

    constructor(image) {
        this.image = image;
    }

    // render this image and append it to rootElement
    render(rootElement) {
        this.image.timesPresented++; // increment presented
        let newImageElement = document.createElement('img');
        newImageElement.src = 'img/' + this.image.imageName;
        newImageElement.style.height = '200px';
        newImageElement.classList.add('pic');
        rootElement.appendChild (newImageElement);
        newImageElement.addEventListener('click', () => {
            this.image.timesChosen++; // increment chosen
        });
    }
}