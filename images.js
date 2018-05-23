/* exported imageObjectsArray randomize*/

window.onbeforeunload = () => {
    window.localStorage.setItem('objectArray', JSON.stringify(imageObjectsArray));
};

const imageObjectsArray = [
    { name: 'images/bag.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/banana.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/bathroom.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/boots.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/breakfast.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/bubblegum.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/chair.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/cthulhu.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/dog-duck.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/dragon.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/pen.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/pet-sweep.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/scissors.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/shark.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/sweep.png',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/tauntaun.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/unicorn.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/usb.gif',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/water-can.jpg',
        clicked: 0,
        displayed: 0
    }, {
        name: 'images/wine-glass.jpg',
        clicked: 0,
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
