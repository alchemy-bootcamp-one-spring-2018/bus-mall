/* globals   ImageArea objectArray*/
/* exported vote App */
const appTemplate = document.getElementById('app-template');
class App {
    constructor() {
        this.list = objectArray;
        this.randomImageArray = [];
        this.tempArray = [];
        this.votes = 0;
    }

    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        this.getRandomObject();
        const imageComponent = new ImageArea(this.randomImageArray, (userChoice) => {
            userChoice.clicks++;
            this.votes++;
            this.getRandomObject();
            imageComponent.update(this.randomImageArray);
            console.log('votes = ' + this.votes);
        });
        imageSection.appendChild(imageComponent.render());
        return dom;

    }


    getRandomObject(){
        this.randomImageArray = [];

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