/* exported ImageDisplay imageElement */


const imageTemplate = document.getElementById('image-template').content;

class ImageDisplay {
    constructor(imageSrc, onSelect) {
        this.imageSrc = imageSrc;
        this.onSelect = onSelect;
        
    }
    
    render() {
        const dom = imageTemplate.cloneNode(true);
        const img = dom.querySelector('img');
        console.log('addEventListener', addEventListener);
        
        for(let i = 0; i < 3; i++) {
            
            const imageElement = dom.getElementById('img' + i);
            imageElement.src = this.imageSrc[i].name;
            console.log('imageElement', imageElement);
            img.addEventListener('click', () => {
                this.onSelect(this.imageSrc[i]);
            });
            imageElement.style.height = '200px';
        }
        return dom;
    }
}