'use strict';
/* globals Product, productList, Result  */
/* exported ProductVote */

const productVoteTemplate = document.getElementById('product-vote-template').content;

class ProductVote {

    constructor(productObjects) {
        this.productObjects = productObjects;
    }

    render() {
        const dom = productVoteTemplate.cloneNode(true);

        for( let i = 0; i < this.productObjects.length; i++) {
            const templateImages = dom.getElementById(`product-${i}`)
            templateImages.src = this.productObjects[i].image;
        }

        const firstProduct = dom.getElementById('product-0');
        const secondProduct = dom.getElementById('product-1');
        const thirdProduct = dom.getElementById('product-2');
        
        firstProduct.src = this.productObjects[0].image;
        secondProduct.src = this.productObjects[1].image;
        thirdProduct.src = this.productObjects[2].image;
        
        return dom;
    }


}