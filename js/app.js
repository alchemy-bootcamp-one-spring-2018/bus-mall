/* globals ImageViewer productArray */
/* exported App */


class App {
    constructor() {
        this.productArray = productArray;
        this.totalVotes = 0;
        console.log('totalVotes:', this.totalVotes);
        
    }
    
    onImageVote(productName) {
    }
    
    
    render() {
        const dom = document.getElementById('app-template').content;
        
        
        const imageViewerSection = dom.getElementById('image-viewer');
        
        const randomIndex = threeRandomProducts(productArray.length);
        const image0 = productArray[randomIndex[0]];
        const image1 = productArray[randomIndex[1]];
        const image2 = productArray[randomIndex[2]];
        
        const imageComponent = new ImageViewer(image0, image1, image2, (productName) => {
            console.log('productName :', productName);
            this.totalVotes++;
            console.log('totalVotes:', this.totalVotes);
        });
        
        
        
        imageViewerSection.appendChild(imageComponent.render());
        
        
        
        
        return dom;
    }
    
}



function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function threeRandomProducts(max) {
    let arrayOfThreeProducts = [];
    for(let i = 0; i < 3; i++) {
        arrayOfThreeProducts[i] = randomInt(max);
    }
    return arrayOfThreeProducts;
}