'use strict';
/* globals Product  */
/* exported VotingOptions */


const votingTemplate = document.getElementById('voting-template');

class VotingOptions {

    constructor(image1, image2, image3) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
    }

    render() {

        const testing = votingTemplate.content.cloneNode(true);
        const firstProduct = testing.getElementById('product-0');
        firstProduct.src = this.image;
        
        return testing;
        console.log('voting-options render function' , testing);
    }
}