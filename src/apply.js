import applicantApi from "./applicant-api";

// import

const form = document.getElementById('nba-app');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    applicantApi.save(applicant);

    // thank you
}