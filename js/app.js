'use strict';

const  appTemplate = document.getElementById('app-template');

class App {
    constructor() {


    }
    render() {
        const testing = appTemplate.content;
        const votingSection = testing.getElementById('voting-options');
        const votingComponent = new VotingOptions; 

        votingSection.appendChild(votingComponent.render());
        
        return testing;
    } 
}