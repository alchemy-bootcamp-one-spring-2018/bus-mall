/* globals ImageDisplay imageObjectsArray randomize*/
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = imageObjectsArray;
        this.totalViews = 0;

    }
    // 

    render() {
        const dom = picTemplate.content;

        const addImageSection = dom.getElementById('add-display');
        const threeImages = randomize();
        console.log('threeImages', threeImages);
        
        // img.addEventListener('click', (userSelection) => {
        //     this.onSelect(this.channel);
        // });

        const addDisplayComponent = new ImageDisplay(threeImages, (image) => {
            this.image; 
            console.log(image + 'has been clicked');
        });
        addImageSection.appendChild(addDisplayComponent.render());
        return dom;
    }
}


// adding event listener
// document.getElementById('img').addEventListener('click', clickCount);

// function clickCount() {
    

// }

// var imageThree = randomImage(copy);
