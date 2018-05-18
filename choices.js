/* exported ProductChoices */

/* globals Choice */

const productTemplate = document.getElementById('choices-template');

class ProductChoices {
    
    constructor(list, onSelect) {
        this.list = list;
        this.onSelect = onSelect;
    }

    clear() {
        while(this.div.lastElementChild) {
            this.div.lastElementChild.remove();
        }


        this.div.textContent = 'Thanks for taking the survey!';
    }

    update(list) {
        this.list = list;
        
        while(this.div.lastElementChild) {
            this.div.lastElementChild.remove();
        }
        
        for(let i = 0; i < this.list.length; i++) {
            const choiceComponent = new Choice(this.list[i], this.onSelect);
            const choiceDom = choiceComponent.render();
            this.div.appendChild(choiceDom);
        }
    }

    render() {

        const dom = productTemplate.content.cloneNode(true);
        this.div = dom.querySelector('div');
        this.update(this.list);
        return dom;
    }
}