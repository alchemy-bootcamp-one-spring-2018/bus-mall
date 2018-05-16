var myImage = new Image();
myImage.src = 'images/banana.jpg';
document.getElementById('my-images').appendChild(myImage);

function createImg() {
    var img = document.createElement('img');
    img.setAttribute('src', 'images/bag.jpg');
    document.body.appendChild(img);
}

var imageArray = [
    { name: 'bag', image: 'images/bag.jpg' },
    { name: 'banana', image: 'images/banana.jpg' },
    { name: 'bathroom', image: 'images/bathroom.jpg' },
    { name: 'boots', image: 'images/boots.jpg' },
    { name: 'breakfast', image: 'images/breakfast.jpg' },
    { name: 'bubblegum', image: 'images/bubblegum.jpg' },
    { name: 'chair', image: 'images/chair.jpg' },
    { name: 'cthulhu', image: 'images/cthulhu.jpg' },
    { name: 'dog duck', image: 'images/dog-duck.jpg' },
    { name: 'dragon', image: 'images/dragon.jpg' },
    { name: 'pen', image: 'images/pen.jpg' },
    { name: 'pet sweep', image: 'images/pet-sweep.jpg' },
    { name: 'scissors', image: 'images/scissors.jpg' },
    { name: 'shark', image: 'images/shark.png' },
    { name: 'sweep', image: 'images/sweep.png' },
    { name: 'tauntaun', image: 'images/tauntaun.jpg' },
    { name: 'unicorn', image: 'images/unicorn.jpg' },
    { name: 'usb', image: 'images/usb.gif' },
    { name: 'water can', image: 'images/water-can.jpg' },
    { name: 'wine glass', image: 'images/wine-glass.jpg' }
];
console.log(imageArray);

function randomNumber(amount) {
    return Math.floor(Math.random(amount) * imageArray.length);
}


function getRandomImage(imageArray) {
    var index = randomNumber(imageArray.length);
    var theImage = imageArray[index];
}

getRandomImage();

function makeThrees() {
    var copy = imageArray.slice();

    for(var i = 0; i < 6; i++) {
        var imageOne = randomImage(copy);
        var imageTwo = randomImage(copy);
        var imageThree = randomImage(copy);

        document.getElementById('three-' + i).
    }
}



// function createImg() {
//     var img = document.createElement('img');
//     img.setAttribute('src', this.image);
//     return img;
// }


// function makeImg() {
//     var imgSpan = document.getElementById('my-images');

//     for(var i = 0; i < imageArray.length; i++) {
//         var img = imageArray[i].createImg();
//         imgSpan.appendChild(img);
//     }
// }

