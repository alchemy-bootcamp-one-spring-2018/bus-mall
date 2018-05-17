/* globals items */
/* exported ItemDisplay */

const itemTemplate = document.getElementById('item-template').content;

class ItemDisplay {

    constructor (items, onSelect) {
        this.items = items;
        this.onSelect = onSelect;
    }

    update() {
        this.items = items;
        
        for(let i = 0; i < 3; i++){
            this.header = dom.getElementById('head-' + i);
            this.header.textContent = this.items[i].name;
            
            this.image = dom.getElementById('img-' + i);
            this.image.src = this.items[i].image;
    
            this.image.addEventListener('click', () => {
                this.onSelect(this.items);
            });

        }

    }

    render() {
        const dom = itemTemplate;
        
        for(let i = 0; i < 3; i++){
            this.header = dom.getElementById('head-' + i);
            this.header.textContent = this.items[i].name;
            
            this.image = dom.getElementById('img-' + i);
            this.image.src = this.items[i].image;
            
            this.image.addEventListener('click', () => {
                this.onSelect(this.items);
                this.items[i].votes++;
                console.log(this.items[i].votes);
            });
        }
        
        console.log(this.items);
        
        return dom;

        // this.header = dom.querySelector('h2');
        // this.header.textContent = this.items.name;

        // this.image = dom.querySelector('img');
        // this.image.src = this.items.image;

    }
}