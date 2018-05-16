/* globals Display */
/*exported App */



const imageTemplate = document.getElementById('app-template');

class App {
    constructor() {
        
    }


    render() {
        const dom = imageTemplate.content;

        const addDisplaySection = dom.getElementById('add-display');
        const addDisplayComponent = new Display();
        addDisplaySection.appendChild(addDisplayComponent.render());

        return dom;
    }
}