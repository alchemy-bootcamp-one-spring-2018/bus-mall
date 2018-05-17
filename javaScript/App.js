/* globals   ImageArea objectArray*/
/* exported vote App */
let votes = 0;
const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = objectArray;
        this.randomImageArray = [];
        this.tempArray = [];
    }

    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        this.getRandomObject();
        const imageComponent = new ImageArea(this.randomImageArray, (userChoice) => {
            userChoice.clicks++;
            votes++;
            console.log(this.tempArray[0]);
            this.getRandomObject();
            console.log(this.randomImageArray[0]);
            imageComponent.update(this.randomImageArray);
            console.log('votes = ' + votes);
        });
        imageSection.appendChild(imageComponent.render());
        return dom;

    }

    getRandomObject(){
        this.randomImageArray.length = [];

        for(let i = 0; i < 3;){
            let ranNum = Math.floor(Math.random() * this.list.length);

            if(this.tempArray.includes(this.list[ranNum]) === false && this.randomImageArray.includes(this.list[ranNum]) === false){
                this.randomImageArray.push(this.list[ranNum]);
                this.randomImageArray[i].views++;
                i++;
            }
        }

        this.tempArray = this.randomImageArray;
    }
}