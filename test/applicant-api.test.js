const test = QUnit.test;
import applicantApi from '../src/applicant-api.js';

QUnit.module('applicant api');
applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip applicant test', (assert) => {

    const applicant = { name: 'tester' };
    applicantApi.save(applicant);
    const result = applicantApi.get();
    assert.deepEqual(result, applicant);
});

test('no apps in local, return empty array', (assert) => {
    testStorage.removeItem('applicants');
    const expected = [];
    const applicants = applicantApi.getAll();
    assert.deepEqual(applicants, expected);
});

test('2 saves, return array with 2items', (assert) => {
    testStorage.removeItem('applicants');

    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    const applicants = applicantApi.getAll();
    assert.deepEqual(applicants, expected);

});