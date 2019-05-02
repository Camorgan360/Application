import getApplicant from '../src/getApplicant.js';
import getApplicant from './applicant-api.js';

const form = document.getElementById('nba-app');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    applicantApi.save(applicant);

    // thank you
});