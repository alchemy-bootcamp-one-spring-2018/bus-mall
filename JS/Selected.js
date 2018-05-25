/* exported Selected */
'use strict';

const clickedTemplate = document.getElementById('clicked-template').content;


class Selected {
    constructor(object, onClick) {
        this.object = object;
        this.onClick = onClick;
    }

    render() {
        const dom = clickedTemplate.cloneNode(true);
            
        const domImage = dom.querySelector('img');
        domImage.addEventListener('click', () => {
            this.onClick(this.object);
        });
    


        domImage.src = this.object.path;
        return dom;

    }
}