'use strict';
/* globals productOption */

for(let i = 0; i <= productOption.length; i++){
    var reportContent = '<p>' + productOption[i].name + ' has been viewed ' + productOption[i].viewed + ' times, and received ' + productOption[i].votes + ' votes.<br>';
    document.getElementById('report-container').innerHTML += (reportContent);
}
document.getElementById('report-container').innerHTML += (reportContent);
