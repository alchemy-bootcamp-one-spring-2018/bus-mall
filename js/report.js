'use strict';
/* globals productOption */

for(let i = 0; i <= productOption.length; i++){
    var reportContent = '<p><strong> ' + productOption[i].name + '</strong> has been viewed ' + productOption[i].viewed + ' times, and received<strong> ' + productOption[i].votes + '</strong> votes.<br>';
    document.getElementById('report-container').innerHTML += (reportContent);
}
document.getElementById('report-container').innerHTML += (reportContent);
