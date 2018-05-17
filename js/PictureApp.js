/* globals PictureViewer, pictures */
/* exported PictureApp */

const appTemplate = document.getElementById('app-template');

class PictureApp {
    constructor() {
        this.pictures = pictures;
    }

    render() {
        const dom = appTemplate.content;

        const pictureViewerSection = dom.getElementById('picture-viewer');
        const pictureViewerComponent = new PictureViewer(this.pictures, (picture) => {
            picture.selectCount++;
            pictureViewerComponent.update(picture);
        });
        const pictureDom = pictureViewerComponent.render();
        pictureViewerSection.appendChild(pictureDom);

        return dom;
    }
}