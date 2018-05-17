'use strict';
/* globals */
/* exported ImageDisplay */


const imageDisplayTemplate = document.getElementById('image-display-template').content;


class ImageDisplay {

    constructor(displayImages, userVoted) {
        this.userVoted = userVoted;
        this.displayImages = displayImages;
    }

    update(displayImages) {
        this.displayImages = displayImages;
        while(this.row.lastElementChild) {
            this.row.lastElementChild.remove();
        }

        for(var i = 0; i < this.displayImages.length; i++) {
            const cell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', this.displayImages[i].imageURL);
            const displayImage = this.displayImages[i];
        
            imgTag.addEventListener('click', () => {
                this.userVoted(displayImage);
                
            });
            
            cell.appendChild(imgTag);
            this.row.appendChild(cell);
        }

    }

    render() {
        const dom = imageDisplayTemplate;
        
        const tbl = document.createElement('table');
        tbl.setAttribute('id', 'image-table');
        this.row = document.createElement('tr');
        this.update(this.displayImages);

        tbl.appendChild(this.row);
        dom.appendChild(tbl);
        return dom;
    }
}