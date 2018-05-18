/* globals ResearchApp */
'use strict';

const app = new ResearchApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);