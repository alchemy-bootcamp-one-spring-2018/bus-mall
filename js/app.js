/* exported App */
/* globals ProductDisplay, imagesData, find3images */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic
        //state containers
        this.imagesData = imagesData;
        // this.image = image;
        // still need to add results section
        // this.results = results;
    }

    render() {
        const dom = appTemplate.content;

        //image displayed
        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new ProductDisplay(find3images(), (image) => {
            
            //can't figure this out:
            // image.votes++;
            // console.log(image.votes);
            // this.imagesData.votes++;
            // alert('clicked');
            // console.log('click happened', event.target);
            // console.log(this.imagesData[i].votes);
 
        });
        imageDisplaySection.appendChild(imageComponent.render());



        //results displayed - to be written
        
        return dom;
    }

}

// find3images();

//call randomizer function
//callback functions
//call Products
//component has two parts: presentation and behavior assoc'd with that presentation
//dependency tree --> script order
