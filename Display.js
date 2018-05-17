'use strict';

const imageTemplate = document.getElementById('image-template').content;

class Display {
    constructor(images) {
        this.images = images;
    }

    render() {
        const dom = imageTemplate;



        
        function displayImage() {
    
        console.log(this.images);
        return dom;
    }
}

}

function displayHeader() {
    var thead = document.getElementById('thead');
    var child = document.createElement('tr');
    var locationTitle = document.createElement('td');
    thead.appendChild(child);
    child.appendChild(locationTitle);
    locationTitle.textContent = 'Locations';