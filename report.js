/* globals ResultReportApp */

'use strict';

const app = new ResultReportApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);
