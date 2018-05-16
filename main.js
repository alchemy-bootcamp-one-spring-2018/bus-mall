


console.log(imageArray);

class App {
        constructio() {
            this.name = name;
            this.image = image;
        }        
}

class ImageViewer {
    constructor(image) {
        render
    }
}

//function randomNumber(amount) {
  //  return Math.floor(Math.random(amount) * imageArray.length);
//}
// var myImage = new Image();
// myImage.src = 'images/banana.jpg';
// document.getElementById('my-images').appendChild(myImage);

// function createImg() {
//     var img = document.createElement('img');
//     img.setAttribute('src', 'images/bag.jpg');
//     document.body.appendChild(img);
// }


function getRandomImage(imageArray) {
    var index = randomNumber(imageArray.length);
    var theImage = imageArray[index];
}

getRandomImage();

function makeThrees() {
       
    }

    var copy = imageArray.slice();

    var img = document.createElement('img');

    document.body.appendChild(img);
    //working with 6 for now for 6 sets of 3
    for(var i = 0; i < 6; i++) {
        var imageOne = randomImage(copy);
        var imageTwo = randomImage(copy);
        var imageThree = randomImage(copy);

        //img.setAttribute('src', 'images/bag.jpg');
        document.getElementById(three-' + i).textContent = image1 + ' - ' + image2 + ' - ' + image 3;
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

