/* globals images getRandomImage */
/* exported Display images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = imageTemplate;
        
        
        
        for(let i = 0; i < 3; i++) {
            const domImage = dom.querySelector('img');
            domImage.src = this.list[i].path;
            dom.appendChild(domImage);

        }
        
        // const Random = imageTemplate;
        
        // const coolImage = Random.querySelector('#pic2');
        // coolImage.src = getRandomImage(images);
        // Random.appendChild(coolImage);

        console.log(this.list);
        return dom;
    }
}