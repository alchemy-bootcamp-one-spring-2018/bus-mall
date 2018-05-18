/* globals ReportApp */

'use strict';

const app = new ReportApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);
