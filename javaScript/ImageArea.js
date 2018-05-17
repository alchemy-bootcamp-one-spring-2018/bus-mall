/* exported ImageChoices */
/* globals randomImageArray getRandomObject  */
'use strict';

const votingTemplate = document.getElementById('voting-template');
class ImageArea {
    constructor(imageArray){
        this.imageArray = imageArray;

    }

    // update(image1, image2, image3){
    //     this.image1 = image1;
    //     this.image2 = image2;
    //     this.image3 = image3;
        
    //     this.img1.src = this.image1.imgSrc;
    // }
    render() {
        const dom = votingTemplate.content.cloneNode(true);
        const imgSection = dom.querySelector('section');
        for(let i in this.imageArray){
            const imgComponent = new ImageMaker(this.imageArray[i]);
            imgSection.appendChild(imgComponent.render());
        }
        return dom;
    }
}

