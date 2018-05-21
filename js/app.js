'use strict';
/* globals ProductVote, Result, Product, productList */
/* exported App */ 

const  appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.productImagesArray = productList;
        this.totalVotes = 0;
    }

    render() {
        const dom = appTemplate.content;
        
        const productVoteSection = dom.getElementById('product-vote');
        const selectedImages = threeRandomProducts(this.productImagesArray);
        const productVoteComponent = new ProductVote(selectedImages);
        const productDom = productVoteComponent.render();
       
        productVoteSection.appendChild(productDom);

        // //Results List
        // const resultsSection = dom.getElementById('results');
        // const resultsComponent = new VoteResults();
        // const resultsDom = resultsComponent.render();
        
        // resultsSection.appendChild(resultsDom);

        return dom;
    } 
}

function randomInt(max){
return Math.floor(Math.random() * max);
}

function threeRandomProducts(productData) {
    let arrayOfThreeProducts = [];
    for(let i = 0; i < 3; i++) {

        const randomIndex = randomInt(productList.length);

        if(arrayOfThreeProducts.includes(productData[randomIndex])) {
            i--;
            continue;
        }
       else {
           arrayOfThreeProducts.push(productData[randomIndex])
       }
    }

    return arrayOfThreeProducts;
}

 function voteClick(threeRandomProducts) {     
     threeRandomProducts.votes++; 
 }


