/* globals SurveyApp */

'use strict';


const app = new SurveyApp();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);
