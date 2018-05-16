'use strict';

const  appTemplate = document.getElementById('app-template');

class App {
    constructor() {


    }
    render() {
        const testing = appTemplate.content;
        const testResult = appTemplate.content;
        
        const votingSection = testing.getElementById('voting-options');

        //the goal is to get the stuff passed to VotingOptions to be the 3 random images
        const votingComponent = new VotingOptions('./images/bag.jpg');
        
        const resultSection = testResult.getElementById('results');
        const resultComponent = new Result();  

        votingSection.appendChild(votingComponent.render());
        resultSection.appendChild(resultComponent.render());
        
        return testing;
        return testResult;
    } 
}

function randomInt(max){
return Math.floor(Math.random() * max);

}