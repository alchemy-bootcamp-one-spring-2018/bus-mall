/* globals images Selected */
/* exported Display images */
'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = imageTemplate;
        
        const imageSection = dom.getElementById('three-images');
        
        for(let i = 0; i < 3; i++) {
            const selectedImage = new Selected(this.list[i]);
            imageSection.appendChild(selectedImage.render());

        }
        return dom;

        // const chooseItem = dom.querySelector('image-template').content;

        // const clickedPic = dom.addEventListener('image-template').content;

    
        
        // const Random = imageTemplate;
        
        // const coolImage = Random.querySelector('#pic2');
        // coolImage.src = getRandomImage(images);
        // Random.appendChild(coolImage);
    }
}