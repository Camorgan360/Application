import getApplicant from '../src/getApplicant.js';
const test = QUnit.test;

test('time to test a function', function(assert) {

    const expected = {
        name:
        age: 
        appSkills:
        tall:
        role:
        motivation:


    };
    
    const formData = new FormData();
    formData.set('full-name', expected.name);
    formData.set('age', expected.age);
    formData.set('app-skills', expected.appSkills[0]);
    formData.append('app-skills', expected.appSkills[0]);
    formData.set('tall', 'yes');
    formData.set('motivation', expected.motivation);

    const applicant = getApplicant(formData);

    assert.deepEqual(applicant, expected);

});