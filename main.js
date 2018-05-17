/* globals App */

const app = new App();

const dom = app.render();

const basecamp = document.getElementById('basecamp');

basecamp.appendChild(dom);