/* exported getRandomIntInclusive, find3images */
/* globals imagesData */
'use strict';


let views = 0;

//function - pick three index values
function find3images() {
    let copy = imagesData.slice();
    let holderArray=[];

    for(let i = 0; i < 3; i++) {


        let imageOne = randomImage(copy);
        holderArray.push(imageOne);
        console.log(imageOne);

        //push into empty array
    

        // document.getElementById('img-' + i).src = imageOne;
    }
    console.log(holderArray);
    return holderArray;
    views++;
}

find3images();
console.log(find3images);

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
