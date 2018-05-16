/* exported ImageChoices */
/* globals randomImageArray getRandomObject  */
'use strict';

const votingTemplate = document.getElementById('voting-template');
class ImageChoices {
    constructor(image1, image2, image3){
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
    }


    render() {
        const dom = votingTemplate.content.cloneNode(true);
        
        let displayImage1 = dom.getElementById('image-1');
        displayImage1.src = this.image1;

        let displayImage2 = dom.getElementById('image-2');
        displayImage2.src = this.image2;

        let displayImage3 = dom.getElementById('image-3');
        displayImage3.src = this.image3;

        displayImage1.addEventListener('click', function() {
            randomImageArray[0].clicks++;
            getRandomObject();
        });
        displayImage2.addEventListener('click', function() {
            randomImageArray[1].clicks++;
            getRandomObject();
        });
        displayImage3.addEventListener('click', function() {
            randomImageArray[2].clicks++;
            getRandomObject();});
        return dom;
    }
}

