'use strict';
/* globals ReportApp */

//create new instance of the app component
const app = new ReportApp();
const dom = app.render();
const root = document.getElementById('root');
//put the apps dom into root
root.appendChild(dom); 