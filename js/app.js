/* globals Vote itemArray */
/* exported App */


class App {
    constructor() {
        this.itemArray = this.itemArray;
        this.totalVotes = 0;
        console.log('totalVotes:', this.totalVotes);
    }
    
    onImageVote(itemName) {
    }
    
    
    
    
    
    render() {
        
        const dom = document.getElementById('app-template').content;
        
        const voteSection = dom.getElementById('vote');
        
        const imageIndexes = threeRandomItems(itemArray.length);
        const image0 = itemArray[imageIndexes[0]];
        const image1 = itemArray[imageIndexes[1]];
        const image2 = itemArray[imageIndexes[2]];
        
        const voteComponent = new Vote(image0, image1, image2, (itemName) => {
            console.log('itemName :', itemName);
            this.totalVotes++;
            console.log('totalVotes:', this.totalVotes);
            
        });
        voteSection.appendChild(voteComponent.render());

        




        return dom;
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function threeRandomItems(max) {
    let arrayOfThreeItems = [];
    for(let i = 0; i < 3; i++) {
        arrayOfThreeItems[i] = randomInt(max);
    }
    return arrayOfThreeItems;
}