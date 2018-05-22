/* exported Picture */

const pictureTemplate = document.getElementById('picture-template');

class Picture {
    constructor(picture, onSelect) {
        this.picture = picture;
        this.onSelect = onSelect;
    }

    render() {
        const dom = pictureTemplate.content.cloneNode(true);
        for(let i = 0; i < this.picture.length; i++) {
            const img = dom.querySelectorAll('img');
            img[i].src = this.picture[i].source;
            this.picture[i].viewCount++;
            img[i].addEventListener('click', () => {
                this.onSelect(this.picture[i]);
            });
        }
        return dom;
        
    }
}