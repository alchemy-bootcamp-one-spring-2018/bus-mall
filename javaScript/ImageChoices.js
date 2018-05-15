/* exported ImageObjects */
'use strict';

const  votingTemplate = document.getElementById('voting-template');
class ImageObjects {
    constructor(name, views, clicks, img, onClick){
        this.name = name;
        this.views = views;
        this.clicks = clicks;
        this.imgSrc = img;
        this.onclick = onClick;

    }

    render() {
        const dom = votingTemplate.contentEditable.cloneNode(true);

        const span = dom.querySelector('span');
        const img = this.img;
        span.appendChile(img);

    }
}