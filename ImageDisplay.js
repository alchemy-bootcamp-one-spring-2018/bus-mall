/* exported ImageDisplay */


const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(singleImageSrc, onSelect) {
        this.imageSrc = singleImageSrc;
        this.onSelect = onSelect;

    }

    render() {
        const dom = imageTemplate;
        console.log('singleImageSr', this.imageSrc[0].name);
        const imageElement = dom.getElementById('img1');

        

        imageElement.src = this.imageSrc[0].name;

        


        // imageElement.setAttribute('src', this.ImageSrc[0]);
        // var rootElement = document.getElementById('images');
        // var imageElement = document.createElement('img');
        // rootElement.appendChild(imageElement);
        // imageElement.style.height = '200px';
        // adding event listener
        // li.addEventListener('click', () => {
        //     this.onSelect(this.channel);
        // });
        return dom;
    }
}