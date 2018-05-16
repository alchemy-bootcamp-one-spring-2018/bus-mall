'use strict';
/* globals imageArray */
/* exported ImageDisplay */


const imageDisplayTemplate = document.getElementById('image-display-template').content;

class ImageDisplay {

    constructor() {

    }

    render() {
        const dom = imageDisplayTemplate;


        const tbl = document.createElement('table');
        tbl.setAttribute('id', 'image-table');
        //const tbl = document.getElementById('image-table');
        const row = document.createElement('tr');

        for(var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * (imageArray.length - 1) + 1);
            const cell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', imageArray[random].image);
            imgTag.setAttribute('height', '200px');
            cell.appendChild(imgTag);
            row.appendChild(cell);
        }

        tbl.appendChild(row);
        return tbl;

        return dom;
    }
}