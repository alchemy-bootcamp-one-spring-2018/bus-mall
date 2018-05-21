/* exported PictureDisplay */
const pictureTemplate = document.getElementById('picture-template').content;

class PictureDisplay {

    constructor(pictures, onVote) {
        this.pictures = pictures;
        this.onVote = onVote;
    }

    update(pictures) {
        this.pictures = pictures;
        for(let i = 0; i < this.pic.length; i++) {
            this.pic[i].src = this.pictures[i].location;
        }
    }

    render() {
        const dom = pictureTemplate;
        this.pic = dom.querySelectorAll('img');
        for(let i = 0; i < this.pic.length; i++) {
            this.pic[i].addEventListener('click', () => {
                this.onVote(this.pictures[i]);
            });
        }

        this.update(this.pictures);

        return dom;
    }
}

