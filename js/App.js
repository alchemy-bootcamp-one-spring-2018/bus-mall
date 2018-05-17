/* globals PictureViewer, pictureArray */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.pictureArray = pictureArray;
    }

    render() {
        const dom = appTemplate.content;

        const pictureViewerSection = dom.getElementById('picture-viewer');
        const pictureViewerComponent = new PictureViewer(this.pictureArray, (picture, selectCount) => {
            picture.selectCount = selectCount;
            pictureViewerComponent.update(this.pictureArray);
        });
        const pictureDom = pictureViewerComponent.render();
        pictureViewerSection.appendChild(pictureDom);

        return dom;
    }
}