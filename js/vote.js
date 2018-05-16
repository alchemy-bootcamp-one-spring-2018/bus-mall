/* exported vote voteCount */
/* globals pictureArray random results */

let voteCount = 0;

function vote() {
    console.log('in the vote function');
    let form = document.getElementsByName('vote');
    let vote = -1;
    for(let i in form) {
        if(form[i].checked) {
            vote = form[i].id.split('_')[1];
            console.log(pictureArray[vote]);
        }
    }

    if(vote === -1) {
        return;
    }

    pictureArray[vote].vote++;
    voteCount++;
    if(voteCount >= 25) {
        document.getElementById('submit').disabled = true;
        results();
        return;
    }
    random();
}

