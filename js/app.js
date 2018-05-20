/* exported App */
/* globals ProductDisplay, imagesData, find3images */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //initialization logic - state containers
        this.imagesData = imagesData;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const imageDisplaySection = dom.getElementById('add-image-display');
        const imageComponent = new ProductDisplay(find3images(), (image) => {
            image.votes++;
            console.log(image.name + ' has ' + image.votes + ' votes.');
            
            imageComponent.update(find3images());

            this.totalViews++;
            if(this.totalViews > 25) {
                alert('Thanks for participating, you have maxed out your votes.');
            }
            
        });
        imageDisplaySection.appendChild(imageComponent.render());
        
        return dom;
    }

}
