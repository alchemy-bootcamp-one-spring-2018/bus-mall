/* globals App */
/* exported images App randomImg */
'use strict';



//creates an instance of the Prod component
const app = new App();
//gets its dom via "render" function
const dom = app.render();
//get a hold of prod-box element to attach Prod to in index.html
const root = document.getElementById('root');
//put the Prods dom into prod-box
root.appendChild(dom);

// console.log(getRandomImage());