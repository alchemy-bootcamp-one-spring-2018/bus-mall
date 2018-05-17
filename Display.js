'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(list) {
        this.list = list;
    }

    render() {
        const dom = imageTemplate;

        const domImage = dom.querySelector('#pic1');
        domImage.src = this.list[0].path;
        dom.appendChild(domImage);

        
        


        console.log(this.list);
        return dom;
    }
}

// function displayHeader() {
//     var thead = document.getElementById('thead');
//     var child = document.createElement('tr');
//     var locationTitle = document.createElement('td');
//     thead.appendChild(child);
//     child.appendChild(locationTitle);
//     locationTitle.textContent = 'Locations';