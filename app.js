/* globals ImageDisplay imageObjectsArray randomize*/
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = imageObjectsArray;

    }
    render() {
        const dom = picTemplate.content;

        const addImageSection = dom.getElementById('add-display');
        const threeImages = randomize();
        console.log('threeImages', threeImages);
        

        const addDisplayComponent = new ImageDisplay(threeImages);
        addImageSection.appendChild(addDisplayComponent.render());

        
        return dom;
    }
}



