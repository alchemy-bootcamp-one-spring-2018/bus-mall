/* globals arrayOfProducts, Product */
/* exported App, imageDom */
function getRandomProducts() {
    let copy = arrayOfProducts.slice();
    let holderArray = [];
    for(var i = 0; i < 3; i++) {
        var itemOne = getRandomItem(copy);
        holderArray.push(itemOne);
    }
    return holderArray;
}

getRandomProducts();
    
    
function getRandomItem(arrayOfProducts) {
    let index = getRandomNumber(arrayOfProducts.length);
    let item = arrayOfProducts[index];
    arrayOfProducts.splice(index, 1);
    return item;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.arrayOfProducts = arrayOfProducts;
        this.totalViews = localStorage.getItem('total views');
    }
    
    render() {
        const dom = appTemplate;
        
        const displayImageSection = dom.getElementById('display-image-section');
        const imageViewerComponent = new Product(getRandomProducts(), (item) => {
            item.votes++;
            console.log(item.name + ' has ' + item.votes + ' votes ');
            imageViewerComponent.update(getRandomProducts());
            this.totalViews++;
            window.localStorage.setItem('total count', this.totalViews);
            if(this.totalViews >= 25) {
                console.log('me 25 plus');
                
                for(let i = 0; i < 3; i++) {
                    console.log('i counting');
                }

            }
        
        });
        
        const imageDom = imageViewerComponent.render(); 
        displayImageSection.appendChild(imageDom);
        
        return dom; 
    }
}
    




