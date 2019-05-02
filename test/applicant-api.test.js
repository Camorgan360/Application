const test = QUnit.test;
// import

QUnit.module('applicant api');

test('round-trip applicant test', (assert) => {

    const applicant = { name: 'tester' };

    applicantApi.save(applicant);
    const result = applicantApi.get();

    assert.deepEqual(result, applicant);

});