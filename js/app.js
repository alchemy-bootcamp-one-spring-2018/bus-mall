/* exported App */
/* globals ProductDisplay, imagesData, find3images */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic
        //state containers
        this.imagesData = imagesData;
        // still need to add results section
        // this.results = results;
    }

    render() {
        const dom = appTemplate.content;

        //image displayed
        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new ProductDisplay(find3images(), (image) => {
            image.votes++;
            console.log(image.name + ' has ' + image.votes + ' votes.');
            
            imageComponent.update(find3images());
        });
        imageDisplaySection.appendChild(imageComponent.render());

        //results displayed - to be written
        
        return dom;
    }

}
