/* exported imageObjectsArray randomize*/

const imageObjectsArray = [
    { name: 'images/bag.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/banana.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/bathroom.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/boots.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/breakfast.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/bubblegum.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/chair.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/cthulhu.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/dog-duck.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/dragon.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/pen.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/pet-sweep.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/scissors.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/shark.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/sweep.png',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/tauntaun.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/unicorn.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/usb.gif',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/water-can.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/wine-glass.jpg',
        chosen: 0,
        displayed: 0
    }];

function randomize() {  
    const threeImages = [];

    for(let i = 0; i < 3; i++) {
        var randomNum = Math.floor((Math.random() * imageObjectsArray.length));
 
        const randomImage = imageObjectsArray[randomNum];
        threeImages.push(randomImage);
        imageObjectsArray.splice(randomNum, 1);
    }

    return threeImages;
}
     
    
    
    
    // function randomize {

    
    //         // get a random integer between 0 and length of images array
        
        
        
    //         // splice out used images from imagesArray 
    //         // imagesArray.splice(randomNum, 1);
    //     }

        
    // }
    