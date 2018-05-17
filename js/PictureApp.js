/* globals PictureViewer, pictureArray */
/* exported PictureApp */

const appTemplate = document.getElementById('app-template');

class PictureApp {
    constructor() {
        this.pictureArray = pictureArray;
    }

    render() {
        const dom = appTemplate.content;

        const pictureViewerSection = dom.getElementById('picture-viewer');
        const pictureViewerComponent = new PictureViewer(this.pictureArray, (selected) => {
            selected.selectCount++;
            pictureViewerComponent.update(this.pictureArray);
        });
        const pictureDom = pictureViewerComponent.render();
        pictureViewerSection.appendChild(pictureDom);

        return dom;
    }
}