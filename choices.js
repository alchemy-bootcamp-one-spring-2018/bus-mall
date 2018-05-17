/* exported ProductChoices */

/* globals Choice */

const productTemplate = document.getElementById('choices-template');

class ProductChoices {
    
    constructor(list, onSelect) {
        this.list = list;
        this.onSelect = onSelect;
    }

    update(list) {
        this.list = list;
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
        
        for(let i = 0; i < this.list.length; i++) {
            const choiceComponent = new Choice(this.list[i], this.onSelect);
            const choiceDom = choiceComponent.render();
            this.ul.appendChild(choiceDom);
        }
    }

    render() {

        const dom = productTemplate.content.cloneNode(true);
        this.ul = dom.querySelector('ul');

        this.update(this.list);
        
        return dom;
    }
}