/* exported App */

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.items = items;
        this.totalViews = localStorage.getItem('total views');
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
            window.localStorage.setItem('total views', this.totalViews);
            if(this.totalViews >= 25){
                document.getElementById('results-link').removeAttribute('hidden');
                document.getElementById('results-thanks').removeAttribute('hidden');
                for(let i = 0; i < 3; i++){
                    document.getElementById('img-' + i).setAttribute('hidden', 'true');
                }
            }
        });



        const imageDom = imageViewerComponent.render();
        displayImageSelection.appendChild(imageDom);

        return dom;
    }
}