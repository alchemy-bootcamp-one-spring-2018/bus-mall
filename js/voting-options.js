'use strict';
/* globals Product  */
/* exported VotingOptions */


const votingTemplate = document.getElementById('voting-template');

class VotingOptions {
    constructor(image) {
        this.image = image;



    }
    render() {
        const testing = votingTemplate.content.cloneNode(true);
        const firstProduct = testing.getElementById('product-0');
        firstProduct.src = this.image;
        return testing;
    }
}