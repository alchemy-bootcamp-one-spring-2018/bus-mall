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
        domImage.src = this.object.path;

        return dom;
    }

}
    
// document.getElementById('pic1').addEventListener('click', function(){
//     document.getElementById('demo').innerHTML = 'Hello World';