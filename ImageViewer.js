/* exported ImageViewer */

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {

    constructor(image) {
        this.image = image;
    }

    render() {
        // this.image = image;
        const dom = imageViewerTemplate;

        // this.header = dom.querySelector('h2');
        // this.header.textContent = this.image.name;
        
        // let newImageElement = document.createElement('img');
        // newImageElement.setAttribute('src', this.image.source);
        // dom.appendChild(newImageElement);

        for(let i = 0; i < 3; i++) {
            let index = this.random(this.image.length);
            let newImage = this.image[index].source;
            // let newImage = this.image.source;
            let newImageElement = document.createElement('img');
            newImageElement.setAttribute('src', newImage);
            dom.appendChild(newImageElement);
            this.image.splice(index, 1);
        }
        return dom;
    }

    random(max) {
        let random = Math.floor(Math.random() * Math.floor(max));
        return random;
    }
}