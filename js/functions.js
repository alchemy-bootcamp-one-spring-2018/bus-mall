
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



function getRandomItem(items){

    let index = getRandomNumber(items.length);

    let item = items[index];

    items.splice(index, 1);

    return item;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

