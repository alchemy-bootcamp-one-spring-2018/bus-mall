/* globals ImageChoices getRandomObjects*/
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {

    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        const imageComponent = new ImageChoices();
        imageSection.appendChild(imageComponent.render());

        // const randomObjects = getRandomObjects(this.Object);
        return dom;
    }
}

// function getRandomObject(object) {

//     return object;
// }