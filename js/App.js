/* globals products getRandomNumberSet TableRow ProductImage ChartContainer */
/* exported App */

class App {

    constructor() {
        this.productsToShow = 3;
        this.maxClicks = 10;
        this.totalClicks = 0;
        this.products = products;
    }

    drawChart() {
        const rootChart = document.getElementById('chart-root');
        const myChart = new ChartContainer (products);
        const dom = myChart.render();
        rootChart.appendChild(dom);
    }

    drawTable() {
        const rootTable = document.getElementById('table-root');
        const tableDom = document.getElementById('table-template').content;
        const rootTableRow = tableDom.getElementById('table-row-root');
        // fill the table with rows
        for(let index = 0; index < products.length; index++) {
            let newRow = new TableRow (products[index]);
            let rowDom = newRow.render();
            rootTableRow.appendChild(rowDom);
        }
        rootTable.appendChild(tableDom);
    }

    drawPictures() {
        const rootPictures = document.getElementById('picture-root');
        const rootRemaining = document.getElementById('decisions-remaining');

        // get set of random numbers to choose products
        var randomNumberSet = getRandomNumberSet(this.productsToShow, this.products.length);
        console.log('random number set:', randomNumberSet);

        // delete existing pictures, if any
        while(rootPictures.lastElementChild) {
            rootPictures.lastElementChild.remove();
        }

        // show decisions remaining
        rootRemaining.textContent = this.maxClicks - this.totalClicks;
        
        // render the image for each product
        for(let loopIndex = 0; loopIndex < this.productsToShow; loopIndex ++) {
            var randomIndex = randomNumberSet[loopIndex];
            products[randomIndex].timesPresented++; // increment presented
            let productImage = new ProductImage(products[randomIndex], (product) => {
                // this callback function handles when the picture is clicked
                product.timesChosen++;
                this.totalClicks++;
                if(this.totalClicks < this.maxClicks) {
                    this.drawPictures();
                } else if(this.totalClicks === this.maxClicks) {
                    rootRemaining.textContent = '0 - Session complete!';
                }
            });
            const dom = productImage.render();
            rootPictures.appendChild(dom);
        }
    }

}





