function getApplicant(formData) {
    const age = parseInt(formData.get('age'));
    const applicant = {
        name: formData.get('full-name'),
        age: age,
        appSkills: formData.getAll('app-skills'),
        tall: formData.get('tall'),
        role: formData.get('role'),
        motivation: formData.get('motivation'),
    };
    return applicant;
}
export default getApplicant;