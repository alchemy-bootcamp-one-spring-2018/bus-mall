'use strict';
/* globals imageArray */
/* exported ImageDisplay */


const imageDisplayTemplate = document.getElementById('image-display-template').content;


class ImageDisplay {

    constructor(userVoted) {
        this.userVoted = userVoted;
        this.products = imageArray;
    }

    /*     getThreeMoreImages() {
        const displayImages = [];

        for(var i = 0; i < 3; i++) {
            displayImages.push(getRandomImage(this.products));
        }
        return displayImages;
    } */

    render(displayImages) {
        const dom = imageDisplayTemplate;
        
        const tbl = document.createElement('table');
        tbl.setAttribute('id', 'image-table');
        const row = document.createElement('tr');

        for(var i = 0; i < displayImages.length; i++) {
            const cell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', displayImages[i].imageURL);
            const displayImage = displayImages[i];
            displayImage.timesShown++;
        
            imgTag.addEventListener('click', () => {
                this.userVoted(displayImage);
                
            });
            
            cell.appendChild(imgTag);
            row.appendChild(cell);
        }

        tbl.appendChild(row);
        dom.appendChild(tbl);
        return dom;
    }
}