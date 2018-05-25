/* globals ImageDisplay imageObjectsArray randomize*/
/* exported App */


const picTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.images = imageObjectsArray;
        this.totalViews = 0;
        this.votes = window.localStorage.getItem('votes');

    }

    render() {
        const dom = picTemplate.content;
        var globalCounter = 0;
        console.log('image.name' + 'has been clicked');

        const addImageSection = dom.getElementById('add-display');
        const threeImages = randomize();
        console.log('threeImages', threeImages);
                

        this.addDisplayComponent = new ImageDisplay(threeImages, (image) => {
            
            image.clicked ++;
            globalCounter++;
            console.log('global counter', globalCounter);
            console.log('image counter' + image.name + '' + image.clicked);
            addImageSection.appendChild(this.addDisplayComponent.render());
        });
        addImageSection.appendChild(this.addDisplayComponent.render());
        return dom;
    }
}