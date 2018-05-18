'use strict';

const surveyButton = document.getElementById('survey-button');
surveyButton.addEventListener('click', () => {
    window.open('survey.html', '_self', false);
})