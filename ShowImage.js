const showImagesTemplate = document.getElementById(show-images-template);

class ShowImages {

    constructor() {

    }


    render() {
        const dom = showImagesTemplate;

        this.header = dom.querySelector('h2');
        this.___ = dom.querySelector('imgage-');   
        this.header.textContent= this.product.name;  
        this.  = this.product.image;

        return dom;
    }

}