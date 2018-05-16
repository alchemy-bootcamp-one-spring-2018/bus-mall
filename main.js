/* globals Prod */
/* exported imagesArray randomImg */
'use strict';


// holds the images
const imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];


// gets random item out of the image array
const randomImg = imageArray[Math.floor(Math.random() * imageArray.length)];



//creates an instance of the Prod component
const prod = new Prod();
//gets its dom via "render" function
const dom = prod.render();
//get a hold of root element to attach Prod to
const root = document.getElementById('root');
//put the Prods dom into root
root.appendChild(dom);