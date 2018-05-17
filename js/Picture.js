/* exported Picture */

const pictureTemplate = document.getElementById('picture-template');

class Picture {
    constructor(picture, onSelect) {
        this.picture = picture;
        this.onSelect = onSelect;
    }

    render() {
        const dom = pictureTemplate.content.cloneNode(true);
        const img = dom.querySelector('img');
        img.src = this.picture.source;
        this.picture.viewCount++;
        img.addEventListener('click', () => {
            this.onSelect(this.picture);
        });
        
        return dom;
    }
}