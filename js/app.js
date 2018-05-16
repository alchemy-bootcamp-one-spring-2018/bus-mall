/* exported App */
/* globals Product, imagesData */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic
        this.images = imagesData;
        // still need to add results section
        // this.results = results;
    }

    render() {
        const dom = appTemplate.content;

        //image displayed
        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new Product();
        imageDisplaySection.appendChild(imageComponent.render());

        //results displayed - to be written
        
        return dom;
    }

}