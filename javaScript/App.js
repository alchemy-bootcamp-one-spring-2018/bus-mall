/* globals ImageChoices objectArray*/
/* exported clearImages App */
let vote = 0;
const appTemplate = document.getElementById('app-template');

class App {

    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        const imageComponent = new ImageChoices(randomImageArray[0].imgSrc, randomImageArray[1].imgSrc, randomImageArray[2].imgSrc);
        imageSection.appendChild(imageComponent.render());

        return dom;
    }
}

let randomImageArray = [];
function getRandomObject() {
    randomImageArray.length = 0;
    for(let i = 0; i < 3;i++){ 
        var ranNum = Math.floor(Math.random() * objectArray.length);
        randomImageArray.push(objectArray[ranNum]);
        randomImageArray[i].views++;
    }
    
    vote++;
    console.log(randomImageArray);
}

// function resetImages() {
//     const imageSection = document.getElementById('image-vote');
//     imageSection.parentNode.removeChild(imageSection);
//     getRandomObject();
// }

getRandomObject();
