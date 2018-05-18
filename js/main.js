'use strict';

//create new instance of the app component
const app = new App();
const dom = app.render();
const root = document.getElementById('root');
//put the apps dom into root
root.appendChild(dom); 