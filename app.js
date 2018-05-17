/* globals ImageDisplay imageObjectsArray */
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = imageObjectsArray;

    }
    render() {
        const dom = picTemplate.content;

        const addImageSection = dom.getElementById('add-display');
        const addDisplayComponent = new ImageDisplay(this.images);
        addImageSection.appendChild(addDisplayComponent.render());

        
        return dom;
    }
}



