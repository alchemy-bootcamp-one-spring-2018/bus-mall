
// function acquireItems(){
//     for(var i = 0; i < 3; i++){
//         let generatedImages = fullItemList[getRandomNumber(fullItemList.length)].render();
//         imageHolder.appendChild(generatedImages);
//     }
// }

// acquireItems();

function acquireRandomItems() {
    let copy = items.slice();
    let holderArray = [];
    for(var i = 0; i < 3; i++){
        var itemOne = getRandomItem(copy);
        holderArray.push(itemOne);
        console.log(itemOne);
        // itemOne = document.getElementById('img-' + i).src;

    }
    console.log(holderArray);
    return holderArray;
}

acquireRandomItems();
console.log(acquireRandomItems);


function getRandomItem(listOfItems){

    let index = getRandomNumber(listOfItems.length);

    let item = listOfItems[index];

    listOfItems.splice(index, 1);

    return item;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomNumber(5));

