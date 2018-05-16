/* exported Product */
/* globals */
'use strict';

const imageDisplayTemplate = document.getElementById('image-display-template');

class Product {
    constructor(name, imageSrc, views, votes, onStatusChange) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.views = views;
        this.votes = votes;
        this.onStatusChange = onStatusChange;
    }

    render() {
        const dom = imageDisplayTemplate.content;
        

        return dom;

    }
}

//comments for planning out next steps
//need render image method
//random method that will come before render image
//event listener waiting for clicks on images