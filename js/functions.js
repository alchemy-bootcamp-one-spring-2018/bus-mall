/* exported getRandomIntInclusive, find3images */
/* globals imagesData */
'use strict';


//function - pick three index values
function find3images() {
    let copy = imagesData.slice();
    let holderArray = [];
    
    for(let i = 0; i < 3; i++) {
        
        let imageOne = randomImage(copy);
        // imageOne.views++;
        holderArray.push(imageOne);

    }
    return holderArray;
}

find3images();

function randomImage(imagesData) {

    let index = getRandomIndex(imagesData.length);

    let image = imagesData[index];

    imagesData.splice(index, 1);

    return image;
}

//source: mdn math.random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
