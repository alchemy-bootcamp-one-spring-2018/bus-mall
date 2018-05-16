'use strict';
/* globals imageArray */
/* exported Display */


const displayTemplate = document.getElementById('display-template');

class Display {
    render() {

        return dom;
    }

    loadImages() {
        const dom = displayTemplate.content;
        const tbl = document.createElement('table');
        const row = document.createElement('tr');

        for(var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * (imageArray.length - 1) + 1);
            console.log(random);
            const cell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', imageArray[random].imgSource);
            imgTag.setAttribute('height', '200px');
            cell.appendChild(imgTag);
            row.appendChild(cell);
        }

        tbl.appendChild(row);
        return tbl;
    }
}