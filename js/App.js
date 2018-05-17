/* globals products getRandomNumberSet ReportItem ImageItem*/
/* exported App */

const rootPictures = document.getElementById('picture-root');
const rootResults = document.getElementById('result-root');

class App {

    constructor() {
        this.productsToShow = 3;
        this.maxClicks = 10;
        this.totalClicks = 0;
        this.products = products;
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
            let imageItem = new ImageItem(products[randomIndex]);
            imageItem.render(rootPictures);
        }

        // there must be a more graceful way to do this, but I can't figure it out.
        // attach another event listener to all existing pictures, and use it to increment totalClicks
        // totalClicks determines whether we keep presenting new pictures, or we stop and show the report.
        let pics = document.getElementsByClassName('pic');
        for(let index = 0; index < pics.length; index++) {
            let pic = pics[index];
            pic.addEventListener('click', () => {
                if(this.totalClicks < this.maxClicks) {
                    this.totalClicks++;
                    this.drawPictures();
                } else if(this.totalClicks === this.maxClicks) {
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
            });
        }
    
    }

}





