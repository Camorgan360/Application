// import

const name = document.getElementById('full-name');
const age = document.getElementById('age');
const appSkills = document.getElementById('app-skills');
const tall = document.getElementById('tall');
const role = document.getElementById('role');
const motivation = document.getElementById('motivation');

const applicant = applicantApi.get();
if(!applicant) {
    window.location = './';
}

name.textContent = applicant.name;
age.textcontent = applicant.age;
appSkills.textContent = applicant.appSkills;
if(applicant.appSkills) {
    appSkills.textContent = applicant.appSkills.join(',');
}
tall.textcontent = applicant.found;
role.textContent = applicant.role;
motivation.textContent = applicant.motivation;