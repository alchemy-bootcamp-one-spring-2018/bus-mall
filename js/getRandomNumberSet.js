/* exported getRandomNumberSet*/

let mostRecentNumberSet = [];

// returns an array (randomNumberSet) of setSize integers between zero and max
function getRandomNumberSet(setSize, max) {

    // create an array we can splice things from.  Do not include numbers in most recent number set.
    var numberArray = [];
    for(let i = 0; i < max; i++) {
        if(!mostRecentNumberSet.includes(i)) {
            numberArray.push(i);
        }
    }

    // get an array of random, non-repeating numbers
    var randomNumberSet = [];
    for(let i = 0; i < setSize; i++) {
        let index = getRandomInt (numberArray.length);
        randomNumberSet.push (numberArray[index]);
        numberArray.splice (index, 1);
    }

    mostRecentNumberSet = randomNumberSet;
    return randomNumberSet;

}

// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
