/* exported ImageMaker */
const imgTemplate = document.getElementById('image-template');
class ImageMaker {
    constructor(object, onClick){
        this.object = object;
        this.onClick = onClick;
    }
    render(){
        const dom = imgTemplate.content.cloneNode(true);
        const imgComponent = dom.querySelector('img');
        imgComponent.src = this.object.imgSrc;
        imgComponent.addEventListener('click', () => {
            this.onClick(this.object);
        });
        return dom;
    }
}