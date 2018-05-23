'use strict';
/* exported Product */


const showImagesTemplate = document.getElementById('show-images-template').content;

class Product {
    constructor(arrayOfProducts, onSelect, totalClicks) {
        this.arrayOfProducts = arrayOfProducts;
        this.onSelect = onSelect;
        this.totalClicks = totalClicks;
    }
    
    update(arrayOfProducts) {
        this.arrayOfProducts = arrayOfProducts;
    
        for(let i = 0; i < 3; i++) {
            console.log('this is what you look at', this.container);
            const img = this.container.querySelector('#image-' + i);
            img.src = this.arrayOfProducts[i].image;
            arrayOfProducts[i].views++;
        }
    }
    
    render() {
        const dom = showImagesTemplate.cloneNode(true);
        this.container = dom.querySelector('div');
        
        for(let i = 0; i < 3; i++) {
            console.log('hey u', this.container);
            const img = this.container.querySelector('#image-' + i);
            img.addEventListener('click', () => {
                this.onSelect(this.arrayOfProducts[i]);
            });
        }
        
        this.update(this.arrayOfProducts);
        return dom;
    }
}

    



