/* exported random */
/* globals pictureArray */

let tempList = [];
let list = [];
for(let i = 0; i < 19; i++) {
    list.push(i);
}

function random() {
    let rand = [];

    for(let i = 0; i < 3; i++) {
        let temp = parseInt(Math.random() * list.length);
        rand.push(list[temp]);
        console.log('temp', temp, 'picarray', pictureArray[list[temp]]);
        pictureArray[list[temp]].shown++;
        list.splice(temp, 1);
    }
    for(let i = 0; i < 3; i++) {
        pictureArray[rand[i]].render(i, rand[i]);
    }

    list = list.concat(tempList);
    tempList = rand;
}