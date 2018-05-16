/* exported App */
/* globals Product, imagesData */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic
        this.imagesData = imagesData;
        // still need to add results section
        // this.results = results;
        //state containers
    }

    render() {
        const dom = appTemplate.content;

        //image displayed
        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new ProductDisplay(this.imagesData[0]);
        imageDisplaySection.appendChild(imageComponent.render());



        //results displayed - to be written
        
        return dom;
    }

}

//call randomizer function
//callback functions
//call Products
//component has two parts: presentation and behavior assoc'd with that presentation
//dependency tree --> script order
