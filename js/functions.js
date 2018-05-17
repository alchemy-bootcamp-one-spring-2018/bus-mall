
function acquireRandomItems() {
    let copy = items.slice();
    let holderArray = [];
    for(var i = 0; i < 3; i++){
        var itemOne = getRandomItem(copy);
        holderArray.push(itemOne);

    }

    return holderArray;
}

acquireRandomItems();



function getRandomItem(listOfItems){

    let index = getRandomNumber(listOfItems.length);

    let item = listOfItems[index];

    listOfItems.splice(index, 1);

    return item;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

