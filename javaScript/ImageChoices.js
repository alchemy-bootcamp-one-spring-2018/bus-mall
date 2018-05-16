/* exported ImageObjects */
'use strict';

const votingTemplate = document.getElementById('voting-template');
class ImageChoices {
    constructor(){
        
    }


    render() {
        const dom = votingTemplate.content.cloneNode(true);
        // const span = dom.querySelector('span');
        // const img = this.img;
        // span.appendChild(img);
        return dom;
    }
}