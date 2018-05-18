/* exported ShowImages */

const showImagesTemplate = document.getElementById('show-images-template');

class Product {

    constructor() {
        this.arrayOfProducts = arrayOfProducts;
        this.totalCount = 0;

    }


    render() {
        const dom = showImagesTemplate.content;

        this.header = dom.querySelector('h2');
        this.container = dom.querySelector('show-images');

        for(let i = 0; i < 3; i++) {

            const image = this.container.querySelector('image-' + i);
            this.header.textContent = this.product.name;
            this.container = this.product.image;
            image.addEventListener('click', () => {
                this.onSelect(this.arrayOfProducts[i]);
            });


        return dom;
        
    }