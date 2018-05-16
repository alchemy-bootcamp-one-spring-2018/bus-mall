/* exported App */
/* globals imagesData */
'use strict';

const addTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic
        // this.images = imagesData;
        // still need to add results section
        // this.results = results;
    }

    render() {
        const dom = addTemplate.content;

        //image displayed
        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new Image();
        imageDisplaySection.appendChild(imageComponent.render());
        
        //results displayed
        
        
        return dom;
    }
}