/* globals ImageDisplay VotingDisplay ResultsDisplay */
/*exported App */

const appTemplate = document.getElementById('app-template');

class App {
    render() {
        const dom = appTemplate.content;

        const addDisplaySection = dom.getElementById('image-display');
        const addDisplayComponent = new ImageDisplay();
        //removed "addDisplayComponent.render()" and replaced with loadImages() after moving to functions.js
        addDisplaySection.appendChild(addDisplayComponent.render());
        //addDisplaySection.appendChild(testAddRow());

        const addVotingSection = dom.getElementById('voting-display');
        const addVotingComponent = new VotingDisplay();
        addVotingSection.appendChild(addVotingComponent.render());
        
        const addResultsSection = dom.getElementById('results-display');
        const addResultsComponent = new ResultsDisplay();
        addResultsSection.appendChild(addResultsComponent.render());

        return dom;
    }
}