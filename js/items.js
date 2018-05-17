/* globals items */
/* exported ItemDisplay */

const itemTemplate = document.getElementById('item-template').content;

class ItemDisplay {

    constructor(items, onSelect) {
        this.items = items;
        this.onSelect = onSelect;
    }
//Trying to figure out how the update works, can't get it to do anything.
    update(items) {
        this.items = items;

        this.items = items;

        for(let i = 0; i < 3; i++){

            const image = this.container.querySelector('#img-' + i);
            image.src = this.items[i].image;

            image.addEventListener('click', () => {
                this.onSelect(this.items[i]);
                console.log(this.items[i].votes);
            });
        }
    }

    render() {
        const dom = itemTemplate;
        this.container = dom.querySelector('div');

        this.update(this.items);

        console.log(this.items);

        return dom;
    }
}
