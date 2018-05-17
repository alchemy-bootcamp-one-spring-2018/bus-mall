/* globals products getRandomNumberSet ReportItem ImageItem*/
/* exported App */

const rootPictures = document.getElementById('picture-root');
const rootResults = document.getElementById('result-root');

class App {

    constructor() {
        this.productsToShow = 4;
        this.maxClicks = 10;
        this.totalClicks = 0;
        this.products = products;
    }

    drawTable() {
        // fill the table with result rows
        for(let index = 0; index < products.length; index++) {
            let reportItem = new ReportItem (products[index]);
            reportItem.render(rootResults);
        }
        // reveal the table
        let hiddenElements = document.querySelectorAll('.hidden');
        for(let i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].classList.toggle('hidden');
        }
    }

    drawPictures() {

        // get set of random numbers to choose products
        var randomNumberSet = getRandomNumberSet(this.productsToShow, this.products.length);
        console.log('random number set:', randomNumberSet);

        // delete existing pictures, if any
        while(rootPictures.lastElementChild) {
            rootPictures.lastElementChild.remove();
        }
        
        // render the image for each product
        for(let loopIndex = 0; loopIndex < this.productsToShow; loopIndex ++) {
            var randomIndex = randomNumberSet[loopIndex];
            products[randomIndex].timesPresented++; // increment presented
            let imageItem = new ImageItem(products[randomIndex], (product) => {
                // this callback function handles when the picture is clicked
                product.timesChosen++;
                this.totalClicks++;
                if(this.totalClicks < this.maxClicks) {
                    this.drawPictures();
                } else if(this.totalClicks === this.maxClicks) {
                    this.drawTable();
                }
            });
            imageItem.render(rootPictures);
        }
    }

}





