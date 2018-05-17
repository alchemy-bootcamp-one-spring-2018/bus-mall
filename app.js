/* globals ImageDisplay */
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }
    render() {
        const dom = picTemplate.content;

        const addImageSection = dom.getElementById('add-display');
        const addDisplayComponent = new ImageDisplay();
        addImageSection.appendChild(addDisplayComponent.render());

        
        return dom;
    }
}



