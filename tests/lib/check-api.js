import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../../lib/check-api';

const ruleTester = avaRuleTester(test, {
    env: {
        es6: true
    }
});

ruleTester.run("check-api", rule, {
    valid: [
        {
            code: "alert(1)",
        }
    ],

    invalid: [

    ]
});
