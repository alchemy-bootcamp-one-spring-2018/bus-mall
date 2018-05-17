/* globals   ImageArea objectArray*/
/* exported vote App */
let votes = 0;
const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = objectArray;
        this.votes = votes;
    }

    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        getRandomObject();
        const imageComponent = new ImageArea(randomImageArray, (userChoice) => {
            userChoice.clicks++;
            votes++;
            getRandomObject();
            imageComponent.update(randomImageArray);
            console.log(userChoice);
            console.log('votes = ' + votes);
        });
        imageSection.appendChild(imageComponent.render());
        return dom;
    }
}

let randomImageArray = [];
function getRandomObject() {
    let tempArray = [];
    randomImageArray.length = 0;
    for(let i = 0; i < 3;){
        let ranNum = Math.floor(Math.random() * objectArray.length);
        if(tempArray.includes(ranNum) === false && randomImageArray.includes(objectArray[ranNum]) === false){
            randomImageArray.push(objectArray[ranNum]);
            randomImageArray[i].views++;
            i++;
        }
    }
    tempArray = randomImageArray;
    console.log(randomImageArray);
    console.log(tempArray);
}