/* exported ImageDisplay */
const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(singleImageSrc, onclick) {
        this.singleImageSrc = singleImageSrc;
        this.onclick = onclick;

    }

    render() {
        const dom = imageTemplate;

        // var rootElement = document.getElementById('images');
        // var imageElement = document.createElement('img');
        // imageElement.setAttribute('src', this.singleImageSrc);
        // rootElement.appendChild(imageElement);
        // imageElement.style.height = '200px';
        // adding event listener
        // li.addEventListener('click', () => {
        //     this.onSelect(this.channel);
        // });
        return dom;
    }
}