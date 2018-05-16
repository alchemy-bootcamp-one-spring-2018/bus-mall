/* globals pictureArray */
/* exported results */

function results() {
    let res = document.getElementById('results');
    for(let i in pictureArray) {
        let pic = pictureArray[i];
        let percent = (pic.vote / pic.shown * 100);
        if(pic.shown === 0) {
            continue;
        }
        res.innerHTML += '<strong>Name:</strong> ' + pic.name + '<br> <span class="underline"><strong>xShown:</strong> ' + pic.shown + '| <strong>xVoted:</strong> ' + pic.vote + '| <strong>Percentage:</strong> ' + percent.toFixed(2) + '%</span><br>';
    }
    res.parentElement.style.display = 'block';
    res.style.alignSelf = 'top';
}