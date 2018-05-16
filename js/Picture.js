/* exported Picture random */

class Picture {

    constructor(fileName) {
        this.name = fileName.split('.')[0];
        this.location = './assets/' + fileName;
        this.shown = 0;
        this.vote = 0;
    }

    render(span, rand) {
        let image = document.getElementById('pic-' + span);
        image.innerHTML = '<img class="image-vote flex-item" src="' + this.location + '">';
        image.innerHTML += '<input type="radio" class="flex-item" name="vote" id="vote_' + rand + '">';
    }
}

