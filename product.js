/* exported showPic Prod  */
'use strict';

const pictureBox = document.getElementById('picture-box');

class Prod {
    constructor(image, name) {
        this.image = image;
        this.name = name;
        this.viewCount = 0;
        this.voteCount = 0;
    }

    let bag = new Prod
    
    render() {
        const dom = pictureBox.content;

        return dom;
    }
}