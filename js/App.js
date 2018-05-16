/* globals productData ImageVote */
/* exported App img1 */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.products = productData;
    }

    render() {
        const dom = appTemplate.content;
        
        const randomProducts = getRandomProducts(this.products);
        
        const imageVoteComponent = new ImageVote(randomProducts);
        
        const imageVoteSection = dom.getElementById('image-vote');

        imageVoteSection.appendChild(imageVoteComponent.render());

        return dom;
    }
}

function getRandomProducts(products) {
    var img1 = randomProduct(products);
    
    return products;
}

var index = getRandomIndex()