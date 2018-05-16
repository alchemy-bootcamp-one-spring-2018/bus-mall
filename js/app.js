//document.write('app.js is loading properly');
/* exported totalClicks */

'use strict';
let totalClicks = 0;

function voteForProduct(event){
    console.log('voteForProduct event', event.target);
    totalClicks ++;
    event.preventDefault();
    console.log(totalClicks);
}
var recordVote = document.getElementById('prod1');
recordVote.addEventListener('click', voteForProduct);

recordVote = document.getElementById('prod2');
recordVote.addEventListener('click', voteForProduct);

recordVote = document.getElementById('prod3');
recordVote.addEventListener('click', voteForProduct);
