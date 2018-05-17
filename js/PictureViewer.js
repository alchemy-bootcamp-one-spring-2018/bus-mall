/* exported PictureViewer */
/* globals Picture */

const pictureViewerTemplate = document.getElementById('picture-viewer-template').content;

class PictureViewer {
    constructor(picture, onSelect) {
        this.picture = picture;
        this.onSelect = onSelect;
    }

    update(picture) {
        const ul = this.ul;
        while(ul.lastElementChild) {
            ul.lastElementChild.remove();
        }

        for(let i = 0; i < 3; i++) {
            let index = this.random(picture.length);
            const pictureComponent = new Picture(picture[index], this.onSelect);
            ul.appendChild(pictureComponent.render());
            picture.splice(index, 1);
        }
    }

    render() {
        const dom = pictureViewerTemplate;
        const ul = dom.querySelector('ul');
        this.ul = ul;
        this.update(this.picture);

        return dom;
    }

    random(max) {
        let random = Math.floor(Math.random() * Math.floor(max));
        return random;
    }
}