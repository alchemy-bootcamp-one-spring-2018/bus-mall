/* globals ImageViewer productArray */
/* exported App */


class App {
    constructor() {
        this.productArray = productArray;
        this.totalVotes = 0;
        this.Array = [];
    }

    update() {
        while(this.imageViewer.lastElementChild) {
            this.imageViewer.lastElementChild.remove();
        }
        const endSurvey = document.createElement('h2');
        endSurvey.textContent = 'Thanks for participating!';
        this.imageViewer.appendChild(endSurvey);
    }

    render() {
        const dom = document.getElementById('app-template').content;
        this.imageViewer = dom.getElementById('image-viewer');
        const randomImageArray = this.threeRandomProducts(this.productArray.length);
        const imageComponent = new ImageViewer(randomImageArray, (product) => {
            product.clicks++;
            this.totalVotes++;
            const randomImageArray = this.threeRandomProducts(this.productArray.length);
            imageComponent.update(randomImageArray);
            if(this.totalVotes === 25) {
                this.update();
            }
        });
        this.imageViewer.appendChild(imageComponent.render());
        return dom;
    }

    //I had major help with this part and its still rather confusing
    threeRandomProducts(max) {
        let indexArray = [];
        let objectArray = [];
        for(let i = 0; i < 3;) {
            let int = randomInt(max);
            if(this.Array.includes(int) === false && indexArray.includes(int) === false) {
                indexArray[i] = int;
                this.productArray[int].views++;
                objectArray[i] = this.productArray[int];
                i++;
            }
        }
        this.Array = indexArray;
        return objectArray;
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}
