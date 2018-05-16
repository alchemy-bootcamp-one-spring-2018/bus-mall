const imageVoteTemplate = document.getElementById('image-vote-template');

class ImageVote {
    constructor(products) {
        this.products = products;
    }

    render() {
        console.log(this.products);
        const dom = imageVoteTemplate.content;
        const img1 = dom.getElementById('img-1');
        img1.src = 'img/' + this.products[0].image;
        const img2 = dom.getElementById('img-2');
        img2.src = 'img/' + this.products[1].image;
        const img3 = dom.getElementById('img-3');
        img3.src = 'img/' + this.products[2].image;
        return dom;
    }
}

