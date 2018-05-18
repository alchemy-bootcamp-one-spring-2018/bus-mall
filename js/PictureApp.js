/* globals PictureViewer, pictures */
/* exported PictureApp */

const appTemplate = document.getElementById('app-template');

class PictureApp {
    constructor() {
        this.pictures = pictures;
        this.totalCount = 0;
    }

    render() {
        const dom = appTemplate.content;

        const pictureViewerSection = dom.getElementById('picture-viewer');
        const pictureViewerComponent = new PictureViewer(this.pictures, (picture) => {
            picture.selectCount++;
            this.totalCount++; // put it in where it's happening!
            if(this.totalCount > 24) {
                console.log('stop!');
                pictureViewerComponent.stop();
            }
            else {
                pictureViewerComponent.update(picture);
            }
        });
        const pictureDom = pictureViewerComponent.render();
        pictureViewerSection.appendChild(pictureDom);

        return dom;
    }
}