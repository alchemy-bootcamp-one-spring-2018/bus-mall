'use strict';
/* globals  */
/* exported VotingOptions */


const votingTemplate = document.getElementById('voting-template');

class VotingOptions {
    constructor() {


    }
    render() {
        const testing = votingTemplate.content.cloneNode(true);
        
        return testing;
    }
}