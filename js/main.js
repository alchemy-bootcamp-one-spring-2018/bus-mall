/* globals App */

const app = new App();

const dom = app.render();

const root = document.getElementById('root');

root.appendChild(dom);