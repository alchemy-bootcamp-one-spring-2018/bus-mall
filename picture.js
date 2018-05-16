const pictureTemplate = document.getElementById('picture-template');

class PictureItems {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    render() {
        const dom = pictureTemplate.contentEditable.cloneNode(true);

        const itemName = dom.querySelector('p');
        const itemImage = dom.querySelector('img');

        p.textContent = this.name;
        img.setAttribute(this.image);
    
        return dom;
    }
}