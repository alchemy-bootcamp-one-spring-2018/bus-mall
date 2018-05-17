'use strict';
/* globals ProductVote, Result, Product, productList */
/* exported App */ 

const  appTemplate = document.getElementById('app-template');

class App {
    constructor() {


    }

    render() {
        const dom = appTemplate.content;
        const selectedImages = threeRandomProducts(productList.length);

        const productVoteSection = dom.getElementById('product-vote');
        const productVoteComponent = new ProductVote(
            productList[selectedImages[0]].image ,
            productList[selectedImages[1]].image ,
            productList[selectedImages[2]].image ,
        );
        const productDom = productVoteComponent.render();
       
        productVoteSection.appendChild(productDom);

        const productIndexes = threeRandomProducts(productList.length);
        const image0 = productList[productIndexes[0]];
        const image1 = productList[productIndexes[1]];
        const image2 = productList[productIndexes[2]];

        
        
        return dom;
    } 
}

function randomInt(max){
return Math.floor(Math.random() * max);
}

function threeRandomProducts(max) {
    let arrayOfThreeProducts = [];
    for(let i=0; i<3; i++) {
        arrayOfThreeProducts[i] = randomInt(max);
    }
    return arrayOfThreeProducts;
}