/* globals */
/* exported Vote */
'use strict';

const voteTemplate = document.getElementById('vote-template');

class Vote {
    constructor(image0, image1, image2) {
        this.image0 = image0;
        this.image1 = image1;
        this.image2 = image2;
    }

    render() {
        const dom = voteTemplate.content.cloneNode(true);
        const first = dom.getElementById('item-0');
        first.src = this.image0;
        const second = dom.getElementById('item-1');
        second.src = this.image1;
        const third = dom.getElementById('item-2');
        third.src = this.image2;


        
        return dom;
    }
}