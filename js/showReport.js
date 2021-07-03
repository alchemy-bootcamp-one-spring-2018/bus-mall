//in progress


const showResultsTemplate = document.getElementById('show-results-template');

class ShowResults {
    constructor(arrayOfProducts){
        this.arrayOfProducts = arrayOfProducts;

    }

    render(){

        const dom = showResultsTemplate.cloneNode(true).content;
        const column = dom.querySelectorAll('td');
        column[0].textContent = this.arrayOfProducts.name;
        column[1].textContent = this.arrayOfProducts.views;
        column[2].textContent = this.arrayOfProducts.votes;

        return dom;
       

    }
}

