'use strict';
/* globals Product, productList, Result  */
/* exported ProductVote */


const productVote = document.getElementById('product-vote-template');

class ProductVote {
    constructor(productObjects){
        this.productImagesArray = productObjects;
    }

    render() {
        const randomProductImages = productVote.content.cloneNode(true);

        for( let i = 0; i < this.productImagesArray.length; i++) {
            const templateImages = randomProductImages.getElementById(`product-${i}`)
            templateImages.src = this.productImagesArray[i].image;
        }
        
        
        const firstProduct = randomProductImages.getElementById('product-0');
        const secondProduct = randomProductImages.getElementById('product-1');
        const thirdProduct = randomProductImages.getElementById('product-2');
        
        firstProduct.src = this.productImagesArray[0].image;
        secondProduct.src = this.productImagesArray[1].image;
        thirdProduct.src = this.productImagesArray[2].image;
        
        firstProduct.addEventListener('click',()=> {
            voteClick(this.product0);
            console.log('event listener working?', this.product0 );
        } )
        secondProduct.addEventListener('click',()=> {
            
        } )
        thirdProduct.addEventListener('click',()=> {
            
        } )
        
        return randomProductImages;
    }
}

