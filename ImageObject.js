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