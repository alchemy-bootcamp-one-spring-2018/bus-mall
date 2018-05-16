/* exported ImageChoices */
/* globals objectArray */
'use strict';

const votingTemplate = document.getElementById('voting-template');
class ImageChoices {
    constructor(){
        
    }


    render() {
        const dom = votingTemplate.content.cloneNode(true);
        
        const image1 = dom.getElementById('image-1');
        console.log(objectArray[0].imgSrc);
        image1.src = objectArray[0].imgSrc;

        const image2 = dom.getElementById('image-2');
        console.log(objectArray[2].imgSrc);
        image2.src = objectArray[2].imgSrc;

        const image3 = dom.getElementById('image-3');
        console.log(objectArray[3].imgSrc);
        image3.src = objectArray[3].imgSrc;
        
        return dom;
    }
}