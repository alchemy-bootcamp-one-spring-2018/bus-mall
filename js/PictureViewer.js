/* exported PictureViewer */
/* globals Picture */

const pictureViewerTemplate = document.getElementById('picture-viewer-template').content;

class PictureViewer {
    constructor(picture, onSelect) {
        this.picture = picture;
        this.onSelect = onSelect;
        this.lastArray = [];
    }

    update() {
        const ul = this.ul;
        while(ul.lastElementChild) {
            ul.lastElementChild.remove();
        }

        let pictureArray = [];
        for(let i = 0; i < 3; i++) {
            let index = this.random(this.picture.length);
            if(pictureArray.includes(this.picture[index]) || this.lastArray.includes(this.picture[index])) {
                i--;
                continue;
            }
            pictureArray[i] = this.picture[index];
        }
        
        this.lastArray = pictureArray;
        const pictureComponent = new Picture(this.lastArray, this.onSelect);
        ul.appendChild(pictureComponent.render());
    }

    render() {
        const dom = pictureViewerTemplate;
        const ul = dom.querySelector('ul');
        this.ul = ul;
        this.update(this.picture);

        return dom;
    }

    stop() {
        const dom = pictureViewerTemplate;
        const ul = this.ul;
        while(ul.lastElementChild) {
            ul.lastElementChild.remove();
        }
        const endMessage = document.createElement('li');
        endMessage.textContent = 'Done!';
        ul.appendChild(endMessage);

        return dom;
    }

    restart() {
        const dom = pictureViewerTemplate;
        const ul = dom.querySelector('ul');
        this.ul = ul;

        const endMessage = document.createElement('li');
        endMessage.textContent = 'Done!';
        ul.appendChild(endMessage);

        return dom;
    }

    random(max) {
        let random = Math.floor(Math.random() * Math.floor(max));
        return random;
    }
}