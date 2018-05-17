/* globals ResultApp */

'use strict';

// const headerApp = new HeaderApp();
// const headerDom = headerApp.render();
// const header = document.querySelector('header');
// header.appendChild(headerDom);


const app = new ResultApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);
