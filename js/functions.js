/* exported getRandomIntInclusive, find3images */
/* globals imagesData */
'use strict';


let views = 0;

//function - pick three index values
function find3images() {
    let copy = imagesData.slice();

    for(let i = 0; i < 3; i++) {

        let imageOne = randomImage(copy);

        document.getElementById('img-' + i).src = imageOne;
    }

    views++;
}


//function - generate random number for above
function randomImage(listOfImages) {

    let index = getRandomIndex(listOfImages.length);

    let image = listOfImages[index];

    listOfImages.splice(index, 1);

    return image;
}


//source: mdn math.random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
