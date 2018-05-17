/* exported ImageViewer */

const imageViewerTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {
    constructor(image) {
        this.image = image;
    }

    render() {
        const dom = imageViewerTemplate;
        // slice?
        let arrayCopy = this.image.slice();
        for(let i = 0; i < 3; i++) {
            let index = this.random(arrayCopy.length);
            let newImage = arrayCopy[index].source;
            arrayCopy[index].viewCount++;

            let newImageElement = document.createElement('img');
            newImageElement.setAttribute('src', newImage);
            dom.appendChild(newImageElement);
            arrayCopy.splice(index, 1);
        }
        this.update();
        return dom;
    }

    update() {
        const dom = imageViewerTemplate;
        const imgElement = dom.querySelectorAll('img');

        for(let i = 0; i < imgElement.length; i++) {
            imgElement[i].addEventListener('click', () => {
                // while(imgElement.lastElementChild) {
                //     imgElement.lastElementChild.remove();
                // }
                this.render();
                console.log('click!');
            });
        }
    }

    random(max) {
        let random = Math.floor(Math.random() * Math.floor(max));
        return random;
    }
}