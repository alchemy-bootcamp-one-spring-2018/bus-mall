/* exported ProductChoice */

/* globals Choice */

const productTemplate = document.getElementById('choices-template');

class ProductChoice {
    
    constructor(list, onSelect) {
        this.list = list;
        this.onSelect = onSelect;
    }

    update() {

    }

    render() {
        
        const dom = productTemplate.content;

        for(let i = 0; i < this.list.length; i++) {
            const choiceComponent = new Choice(this.list[i], this.onSelect);
            const choiceDom = choiceComponent.render();
            dom.appendChild(choiceDom);
            
            //const product = dom.getElementById('product-' + i);
            //product.src = this.list[i];
        }
        
        return dom;
    }
}