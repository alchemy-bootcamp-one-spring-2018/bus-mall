/* exported ImageChoices */
/* globals  */
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
        
        const displayImage1 = dom.getElementById('image-1');
        displayImage1.src = this.image1;

        const displayImage2 = dom.getElementById('image-2');
        displayImage2.src = this.image2;

        const displayImage3 = dom.getElementById('image-3');
        displayImage3.src = this.image3;

        return dom;
    }
}