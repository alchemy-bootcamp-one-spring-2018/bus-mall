/* exported ImageDisplay imageElement */


const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(singleImageSrc, onSelect) {
        this.imageSrc = singleImageSrc;
        this.onSelect = onSelect;
        
    }
    
    render() {
        const dom = imageTemplate;
        console.log(this.imageSrc);
        console.log('singleImageSr', this.imageSrc[0].name);
        
        for(let i = 0; i < 3; i++) {
            
            const imageElement = dom.getElementById('img' + i);
            imageElement.src = this.imageSrc[i].name;
            console.log('imageElement', imageElement);
            imageElement.style.height = '200px';
        }
        
        
        
        
        return dom;
    }
}
// imageElement.src = this.imageSrc[0].name;



// imageElement.setAttribute('src', this.ImageSrc[0]);
// var rootElement = document.getElementById('images');
// var imageElement = document.createElement('img');
// rootElement.appendChild(imageElement);
// adding event listener
// li.addEventListener('click', () => {
//     this.onSelect(this.channel);
// });