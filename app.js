/* globals Display */
/*exported App */

const appTemplate = document.getElementById('app-template');

class App {
    render() {
        const dom = appTemplate.content;

        const addDisplaySection = dom.getElementById('add-display');
        const addDisplayComponent = new Display();
        addDisplaySection.appendChild(addDisplayComponent.loadImages());

        return dom;
    }
}