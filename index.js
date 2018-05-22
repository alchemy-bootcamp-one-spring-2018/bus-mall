/* globals PictureApp */

const app = new PictureApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);