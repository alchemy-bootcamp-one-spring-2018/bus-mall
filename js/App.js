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

function getRandomProducts(productData) {
    let imageArray = [];

    for(let i = 0; i < 3; i++) {
        const index = getRandomIndex(productData.length);
        console.log(index);
        console.log(productData[index]);
        if(index !== i) {
            imageArray.push(productData[index]);
        }
        else {
            const imageArray = imageArray.slice(i);
        }


    }

    return imageArray;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
