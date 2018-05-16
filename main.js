





// loop for images, array nested within
for(var i = 0; i < 3; i++) {
    const imagesArray = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

    // get a random integer between 0 and length of images array
    var randomImage = Math.floor((Math.random() * imagesArray.length));

    console.log('number', randomImage);

    // append images to div via DOM
    var displayImageSet = document.getElementById('images');
    var imageSet = document.createElement('img');
    imageSet.setAttribute('src', imagesArray[randomImage]);
    displayImageSet.appendChild(imageSet);
    imageSet.style.height = '200px';
    // splice out used images from imagesArray 
    imagesArray.splice(randomImage, 1);
}


//     var index = getRandomIndex(imagesArray.length);
    
//     // gets that image from the array by the integer as index
//     var randomImage = imagesArray[index];

//     // remove that image from the array
//     imagesArray.splice(index, 1);

//     // return the randomly selected image
//     return randomImage;
// }




// var imageThree = randomImage(copy);





// function randomImages() {
    

