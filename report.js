/* globals ReportApp */

const root = document.getElementById('root');
const app = new ReportApp();
const dom = app.render();
root.appendChild(dom);