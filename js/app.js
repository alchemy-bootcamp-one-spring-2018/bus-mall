/* globals */

const imageHolder = document.getElementById('foothold-element');

function acquireItems(){
    for(var i = 0; i < 3; i++){
        let generatedImage = fullItemList[getRandomNumber(fullItemList.length)].render();
        imageHolder.appendChild(generatedImage);
    }
}

acquireItems();

function updateItems(){
    for(var i = 0; i < 3; i++){
        let newImages = fullItemList[getRandomNumber(fullItemList.length)].render();
        imageHolder.update(newImages);
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomNumber(5));

// var t = document.querySelector('foothold-element');
// var clone = document.importNode(t.content, true)
