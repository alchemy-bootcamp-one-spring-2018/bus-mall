
// function acquireItems(){
//     for(var i = 0; i < 3; i++){
//         let generatedImages = fullItemList[getRandomNumber(fullItemList.length)].render();
//         imageHolder.appendChild(generatedImages);
//     }
// }

// acquireItems();

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomNumber(5));

