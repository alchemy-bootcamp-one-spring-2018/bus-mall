/* globals images getRandomNumberSet ReportItem ImageItem*/
/* exported App */

const rootPictures = document.getElementById('picture-root');
const rootResults = document.getElementById('result-root');

class App {

    constructor() {
        this.imagesToShow = 3;
        this.maxClicks = 2;
        this.totalClicks = 0;
        this.images = images;
    }

    drawPictures() {

        // get set of random numbers to choose images
        var randomNumberSet = getRandomNumberSet(this.imagesToShow, this.images.length);
        console.log('random number set:', randomNumberSet);

        // delete existing pictures, if any
        while(rootPictures.lastElementChild) {
            rootPictures.lastElementChild.remove();
        }
        
        // write the images
        for(let loopIndex = 0; loopIndex < this.imagesToShow; loopIndex ++) {
            var randomIndex = randomNumberSet[loopIndex];
            let imageItem = new ImageItem(images[randomIndex]);
            imageItem.render(rootPictures);
        }

        // there must be a more graceful way to do this, but I can't figure it out.
        // attach another event listener to all existing pictures, and use it to increment totalClicks
        // totalClicks determines whether we keep presenting new pictures, or we stop and show the report.
        let pics = document.getElementsByClassName('pic');
        for(let index = 0; index < pics.length; index++) {
            let pic = pics[index];
            pic.addEventListener('click', () => {
                if(this.totalClicks < this.maxClicks) {
                    this.totalClicks++;
                    this.drawPictures();
                } else if(this.totalClicks === this.maxClicks) {
                    // report results
                    for(let index = 0; index < images.length; index++) {
                        let reportItem = new ReportItem (images[index]);
                        reportItem.render(rootResults);
                    }
                    let hiddenElements = document.querySelectorAll('.hidden');
                    for(let i = 0; i < hiddenElements.length; i++) {
                        hiddenElements[i].classList.toggle('hidden');
                    }
                }
            });
        }
    
    }

}





