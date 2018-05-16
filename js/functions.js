'use strict';
/* globals */
/* exported getRandomImage */

/* function loadImages() {
    const tbl = document.createElement('table');
    tbl.setAttribute('id', 'image-table');
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
} */


function getRandomImage(imageArray) {
    var random = Math.floor(Math.random() * (imageArray.length - 1) + 1);
    var randomImage = imageArray[random];

    return randomImage;
}
