'use strict';
/* globals Product, productList, Result  */
/* exported ProductVote */


const productVote = document.getElementById('product-vote-template');

class ProductVote {

    constructor(image0, image1, image2) {
        this.image0 = image0;
        this.image1 = image1;
        this.image2 = image2;
    }

    render() {

        const randomProductImages = productVote.content.cloneNode(true);
        const firstProduct = randomProductImages.getElementById('product-1');
        const secondProduct = randomProductImages.getElementById('product-2');
        const thirdProduct = randomProductImages.getElementById('product-3');
        firstProduct.src = this.image0;
        secondProduct.src = this.image1;
        thirdProduct.src = this.image2;
        
        firstProduct.addEventListener('click',()=> {
            console.log('event listener working?', this.image0 );
         } )
        secondProduct.addEventListener('click',()=> {
            console.log('event listener working?', secondProduct );
         } )
        thirdProduct.addEventListener('click',()=> {
            console.log('event listener working?', thirdProduct );
         } )
       
        return randomProductImages;
    }
}