/* globals ImageDisplay imageObjectsArray randomize*/
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = imageObjectsArray;
        this.totalViews = 0;

    }
    

    render() {
        const dom = picTemplate.content;
        var globalCounter = 0;
        console.log('image.name' + 'has been clicked');

        const addImageSection = dom.getElementById('add-display');
        const threeImages = randomize();
        console.log('threeImages', threeImages);
        
        

        const addDisplayComponent = new ImageDisplay(threeImages, (image) => {
            
            image.clicked ++;
            globalCounter++;
            console.log('global counter', globalCounter);
            console.log('image counter' + image.name + "  " + image.clicked);

        });
        addImageSection.appendChild(addDisplayComponent.render());
        return dom;
    }
}


