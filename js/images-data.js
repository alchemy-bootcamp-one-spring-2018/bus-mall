/* exported imagesData  */
/* globals */
'use strict';

const ProductsData = window.localStorage.getItem('imagesData');

window.onbeforeunload = () => {
    window.localStorage.setItem('imagesData', JSON.stringify(imagesData));
};

let imagesData;
if(ProductsData) {
    imagesData = JSON.parse(ProductsData);
}
else {
    initImages();
}

function initImages() {
    imagesData = [
        {
            name: 'bag',
            imageSrc: 'img/bag.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'banana',
            imageSrc: 'img/banana.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'bathroom',
            imageSrc: 'img/bathroom.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'boots',
            imageSrc: 'img/boots.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'breakfast',
            imageSrc: 'img/breakfast.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'bubblegum',
            imageSrc: 'img/bubblegum.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'chair',
            imageSrc: 'img/chair.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'cthulhu',
            imageSrc: 'img/cthulhu.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'dog-duck',
            imageSrc: 'img/dog-duck.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'dragon',
            imageSrc: 'img/dragon.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'pen',
            imageSrc: 'img/pen.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'pet-sweep',
            imageSrc: 'img/pet-sweep.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'scissors',
            imageSrc: 'img/scissors.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'shark',
            imageSrc: 'img/shark.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'sweep',
            imageSrc: 'img/sweep.png',
            views: 0,
            votes: 0
        },
        {
            name: 'tauntaun',
            imageSrc: 'img/tauntaun.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'unicorn',
            imageSrc: 'img/unicorn.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'usb',
            imageSrc: 'img/usb.gif',
            views: 0,
            votes: 0
        },
        {
            name: 'water-can',
            imageSrc: 'img/water-can.jpg',
            views: 0,
            votes: 0
        },
        {
            name: 'wine-glass',
            imageSrc: 'img/wine-glass.jpg',
            views: 0,
            votes: 0
        }
    ];
}

console.log(imagesData);

function clearProductsData() {
    window.localStorage.clear('imagesData');
    initImages();
}