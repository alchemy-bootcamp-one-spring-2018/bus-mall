'use strict';
/* exported Display */

const displayTemplate = document.getElementById('display-template');

class Display {
    constructor() {
        
    }


    render() {
        const dom = displayTemplate.content;

        return dom;
    }
}