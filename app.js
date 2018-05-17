/* globals images Display */
/* exported App Prod */
'use strict';

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.images = images;
        this.views = 0;
    }
    render() {
        
        const dom = appTemplate;

        const imageDisplaySection = dom.getElementById('pictures');
        const imageDisplayComponent = new Display(this.images);
        const imageDom = imageDisplayComponent;
        imageDisplaySection.appendChild(imageDom.render());


        return dom;
    }
}

// gets random item out of the image array
function getRandomImage() {
    return Math.floor(Math.random() * images.length);
}

getRandomImage();
console.log(getRandomImage());
    




