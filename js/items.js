/* globals items */
/* exported ItemDisplay */

const itemTemplate = document.getElementById('item-template').content;

class ItemDisplay {

    constructor (items) {
        this.items = items;

    }

    render() {
        const dom = itemTemplate;
        
        for(let i = 0; i < 3; i++){
            this.header = dom.getElementById('head-' + i);
            this.header.textContent = this.items[i].name;
            
            this.image = dom.getElementById('img-' + i);
            this.image.src = this.items[i].image;
            console.log(this.items);
        }
        console.log(this.items);
        return dom;
        // this.header = dom.querySelector('h2');
        // this.header.textContent = this.items.name;

        // this.image = dom.querySelector('img');
        // this.image.src = this.items.image;

    }
}