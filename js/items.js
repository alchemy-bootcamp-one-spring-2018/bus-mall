/* globals items */
/* exported ItemDisplay */

const itemTemplate = document.getElementById('item-template').content;

class ItemDisplay {

    constructor (items) {
        this.items = items;

    }

    render() {
        const dom = itemTemplate;

        this.header = dom.querySelector('h2');
        this.header.textContent = this.items.name;

        this.image = dom.querySelector('img');
        this.image.src = this.items.image;

        return dom;

    }
}