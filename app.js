

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.arrayOfProducts = arrayOfProducts;
        this.totalCount = 0;
    }

    render() {
        const dom = appTemplate;

        const displayImageSection = dom.getElementById('display-image-section');
        const imageViewerComponent = new Product(arrayOfProducts);
        const imageDom = imageViewerComponent.render();
        displayImageSection.appendChild(imageDom);

        return dom;

    }
}