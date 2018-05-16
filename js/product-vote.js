'use strict';
/* globals Product, productList, Result  */
/* exported ProductVote */


const productVote = document.getElementById('product-vote-template');

class ProductVote {

    constructor(image1, image2, image3) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
    }

    render() {

        const testing = votingTemplate.content.cloneNode(true);
        const firstProduct = testing.getElementById('product-1');
        firstProduct.src = this.image;
        
        return testing;
        console.log('product vote render function' , testing);
    }
}