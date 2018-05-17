/* exported Choice*/

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    
    constructor(choice, onSelect) {
        this.choice = choice;
        this.onSelect = onSelect;
    }

    render() {
        const dom = choiceTemplate.content.cloneNode(true);

        const domChoice = dom.querySelector('img');
        domChoice.src = this.choice.image;
        domChoice.addEventListener('click', () => {
            this.onSelect(this.choice);
        });

        return dom;
    }
}