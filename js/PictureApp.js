/* globals PictureViewer, pictures */
/* exported PictureApp */

const appTemplate = document.getElementById('app-template');

class PictureApp {
    constructor() {
        this.pictures = pictures;
        this.totalCount = window.localStorage.getItem('totalCount', 0);
    }

    render() {
        const dom = appTemplate.content;
        const pictureViewerSection = dom.getElementById('picture-viewer');

        if(this.totalCount >= 24) {
            const pictureViewerComponent = new PictureViewer;
            const pictureDom = pictureViewerComponent.restart();
            pictureViewerSection.appendChild(pictureDom);
            return dom;
        }
        else {
            const pictureViewerComponent = new PictureViewer(this.pictures, (picture) => {
                if(this.totalCount >= 24) {
                    window.localStorage.setItem('totalCount', this.totalCount);
                    picture.selectCount++;
                    pictureViewerComponent.stop();
                } else {
                    picture.selectCount++;
                    this.totalCount++; // put it in where it's happening!
                    pictureViewerComponent.update(picture);

                }
            });
            const pictureDom = pictureViewerComponent.render();
            pictureViewerSection.appendChild(pictureDom);
            return dom;
        }
    }
}