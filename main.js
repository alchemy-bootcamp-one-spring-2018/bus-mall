/* globals Product */

const app = new Product();

const dom = app.render();

const root = document.getElementById('root');

root.appendChild(dom);