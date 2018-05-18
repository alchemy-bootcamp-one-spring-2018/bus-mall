/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.items = items;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate;

        const displayImageSelection = dom.getElementById('displayed-images');
        const imageViewerComponent = new ItemDisplay(acquireRandomItems(), (item) => {
        //My this.update was inside of here, but it never worked.
            item.votes++;
            console.log(item.name + ' has ' + item.votes + ' votes');
            imageViewerComponent.update(acquireRandomItems());
            this.totalViews++;
            if(this.totalViews >= 25){
                document.getElementById('results-link').removeAttribute('hidden');
                document.getElementById('results-thanks').removeAttribute('hidden');
            }
        });



        const imageDom = imageViewerComponent.render();
        displayImageSelection.appendChild(imageDom);

        return dom;
    }
}