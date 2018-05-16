/* exported ImageObject, imageArray, getRandomIndex */
'use strict';

class ImageObject {
    constructor(name, source, viewCount, selectCount) {
        this.name = name;
        this.source = source;
        this.viewCount = viewCount;
        this.selectCount = selectCount;
    }
}

// function getRandomIndex(max) {
//     let random = Math.floor(Math.random() * Math.floor(max));
//     return random;
// }