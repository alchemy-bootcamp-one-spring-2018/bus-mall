/* exported Choice*/

const choiceTemplate = document.getElementById('choice-template');

class Choice {
    
    constructor(choice, onSelect) {
        this.choice = choice;
        this.onSelect = onSelect;
    }


    render() {
        const dom = choiceTemplate.content.cloneNode(true);

        const choice = dom.querySelector('img');
        choice.src = this.choice.image;
        choice.addEventListener('click', () => {
            this.onSelect(this.choice);
        });

        return dom;
    }
}