/* exported Product */

const showImagesTemplate = document.getElementById('show-images-template').content;

class Product {
    constructor(arrayOfProducts) {
        this.arrayOfProducts = arrayOfProducts;
    }

    render() {
        const dom = showImagesTemplate.cloneNode(true);
        this.container = dom.querySelector('div');
        
        for(let i = 0; i < 3; i++) {
            console.log('this is what you look at', this.container);
            const img = this.container.querySelector('#image-' + i);
            img.src = this.arrayOfProducts[i].image;
        }
        
        return dom;
    }
}

//this.arrayOfProducts.viewCount++;
// img.addEventListener('click', () => {
//     this.onSelect(this.arrayOfProducts);



