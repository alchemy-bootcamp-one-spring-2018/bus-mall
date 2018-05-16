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
        const random = imageArray[Math.floor(Math.random() * imageArray.length)];
        console.log(random);
        const tbl = document.createElement('table');
        const row = document.createElement('tr');

        for(var i = 0; i < 3; i++) {
            const cell = document.createElement('td');
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', imageArray[i].imgSource);
            console.log(imgTag);
            //document.getElementById('img' + i).src = imageArray[i].imgSource;
            cell.appendChild(imgTag);
            row.appendChild(cell);

            
        }

        tbl.appendChild(row);
        return tbl;
    }
}