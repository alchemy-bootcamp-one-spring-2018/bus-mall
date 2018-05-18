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

    endSurvey() {
        while(this.imageSection.lastElementChild) {
            this.imageSection.lastElementChild.remove();
        }
        window.localStorage.setItem('votes', JSON.stringify(this.votes));
        const endNote = document.createElement('h1');
        endNote.id = 'end-survey-message';
        endNote.textContent = 'Thank you for your time! Check results with the button above.';
        this.imageSection.appendChild(endNote);
    }
    render(){

        const dom = appTemplate.content;
        this.imageSection = dom.getElementById('image-vote');
        this.getRandomObject();
        const imageComponent = new ImageArea(this.randomImageArray, (userChoice) => {
            if(this.votes >= 25) {
                window.localStorage.setItem('objectArray', JSON.stringify(objectArray));
                this.endSurvey();

            }
            userChoice.clicks++;
            this.votes++;
            this.getRandomObject();
            imageComponent.update(this.randomImageArray);
            console.log('votes = ' + this.votes);
        });
        this.imageSection.appendChild(imageComponent.render());
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