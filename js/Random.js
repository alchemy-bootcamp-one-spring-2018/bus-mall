/* exported Random */
/* globals  */

class Random {
    constructor(masterList) {
        this.masterList = masterList;
        this.last = [];
    }

    randomize() {
        const temp = this.masterList.slice().filter(a => !this.last.includes(a));
        const random = [];
        for(let i = 0; i < 3; i++) {
            let tempRand = parseInt(Math.random() * temp.length);
            random.push(temp[tempRand]);
            temp.splice(tempRand, 1);
        }
        this.last = random;
        return random;
    }
}