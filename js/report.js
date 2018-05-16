/* globals productOption */

for(let i = 0; i < productOption.length; i++){
    var reportContent = productOption[i].name + ' has been viewed ' + productOption[i].viewed + ' times, and received ' + productOption[i].votes + ' votes.';
    console.log(reportContent);
}