/* exported PictureReport */

const pictureReportTemplate = document.getElementById('picture-report-template').content;

class PictureReport {
    constructor(picture) {
        this.picture = picture;
    }

    render() {
        const dom = pictureReportTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.picture.name;
        columns[1].textContent = this.picture.viewCount;
        columns[2].textContent = this.picture.selectCount;
        return dom;
    }
}