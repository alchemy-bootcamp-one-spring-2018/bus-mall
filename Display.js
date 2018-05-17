/* globals images getRandomImage */
/* exported images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = imageTemplate;

        const domImage = dom.querySelector('#pic1');
        domImage.src = this.list[1].path;
        dom.appendChild(domImage);

        
        const Random = imageTemplate;
        
        const coolImage = Random.querySelector('#pic2');
        coolImage.src = getRandomImage(images);
        Random.appendChild(coolImage);

        console.log(this.list);
        return dom;
    }
}