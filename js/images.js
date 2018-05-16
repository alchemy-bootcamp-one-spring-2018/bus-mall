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

    render() {
        const dom = addTemplate.content;
        

        return dom;

    }
}