'use strict';
/* globals ProductVote, Result, Product, productList */
/* exported App */ 

const  appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        //this.? = ?;
        //this.totalVotes = 0;
    }

    //showVoteResults() {
        //if total vote count is less than 25 don't display
        //else total vote count is equal to 25, display UL

        // const VoteResultsDom = this.VoteResults.render();
        // this.resultsSection.appendChild(VoteResultsDom);

    // Put update stuff here    

    //}

    render() {
        const dom = appTemplate.content;
        
        const productVoteSection = dom.getElementById('product-vote');
        
        
        const selectedImages = threeRandomProducts(productList.length);

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
    //put logic from hangman about checking against existing stuff 
        arrayOfThreeProducts[i] = randomInt(max);
    }
    return arrayOfThreeProducts;
}