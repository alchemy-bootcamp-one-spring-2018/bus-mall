/* globals ImageViewer, ProductSelector, productArray, VotingReport */
/* Exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.productArray = productArray;
        this.totalVotes = 0;
    }

    showReport(){
        if(!this.votingReportComponent) {
            this.votingReportComponent = new VotingReport(this.productArray);
            const votingReportDom = this.votingReportComponent.render();
            this.votingReportSection.appendChild(votingReportDom);
        }
        else {
            this.votingReportComponent.update(this.productArray);
        }
    }

    render() {
        const dom = appTemplate.content;

        const imageViewerSection = dom.getElementById('image-viewer');
        const imageViewerComponent = new ImageViewer(this.productArray[0]);
        const imageDom = imageViewerComponent.render();
        imageViewerSection.appendChild(imageDom);

        const productSelectorSection = dom.getElementById('product-selector');
        const productSelectorComponent = new ProductSelector(this.productArray, (product) => {
            product.count++;
            imageViewerComponent.update(product);

            this.totalVotes++;
            if(this.totalVotes > 24) {
                this.showReport();
            }
        });
        const productDom = productSelectorComponent.render();
        productSelectorSection.appendChild(productDom);

        this.votingReportSection = dom.getElementById('voting-report');
        this.showReport();

        return dom;
    }
}