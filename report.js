/* globals ResultReportApp */

'use strict';

const app = new ResultReportApp();
const doms = app.render();
const root = document.getElementById('root');
root.appendChild(doms);
