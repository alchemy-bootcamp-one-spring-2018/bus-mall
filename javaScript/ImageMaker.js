
const imgTemplate = document.getElementById('image-template');
class ImageMaker {
    constructor(object){
        this.object = object;
    }
    render(){
        const dom = imgTemplate.content.cloneNode(true);
        const imgComponent = dom.querySelector('img');
        imgComponent.src = this.object.imgSrc;
        return dom;
    }
}