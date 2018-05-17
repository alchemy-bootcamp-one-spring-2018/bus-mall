/* globals Vote itemArray */
/* exported App */


class App {
    constructor() {
        this.itemArray = itemArray;
        this.totalVotes = 0;
        console.log('totalVotes:', this.totalVotes);
        
    }
    
    onImageVote(itemName) {
    }
    
    
    render() {
        
        const dom = document.getElementById('app-template').content;
        const voteSection = dom.getElementById('vote');
        
        const randomIndex = threeRandomItems(itemArray.length);
        const image0 = itemArray[randomIndex[0]];
        const image1 = itemArray[randomIndex[1]];
        const image2 = itemArray[randomIndex[2]];
        
        const voteComponent = new Vote(image0, image1, image2, (itemName) => {
            console.log('itemName :', itemName);
            this.totalVotes++;
            console.log('totalVotes:', this.totalVotes);
            
            
            
            
        });
        
        const resultSection = dom.getElementById('results');
        const resultComponent = new Result();
        resultSection.appendChild(resultComponent.render());
       
        
        
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