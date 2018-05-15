/* exported Image */
/* globals */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class Image {
    constructor(name, imageSrc, views, votes, onStatusChange) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.views = views;
        this.votes = votes;
        this.onStatusChange = onStatusChange;
    }
/* 
    random() {
        //code block
    }

    update() {
        //code block
    }
 */
    render() {
        const dom = imageDisplayTemplate.contentEditable.cloneNode(true);
        //reference to a dom so we can append image
        const img = dom.querySelector('img');
        this.img = img;

        return dom;

    }
}