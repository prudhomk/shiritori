/* eslint-disable max-len */
import { ruleCheck, checkDictionary } from '../src/components/utilities/ruleset.js';
import { FnV } from '../src/data/categories.js';

describe('ruleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter', () => {
    const x = 'apple';
    const y = 'eggplant';
    const z = 'fish';

    expect(ruleCheck(x, y)).toEqual(true);
    expect(ruleCheck(x, z)).toEqual(false);
  });

});

describe('checkDictionary(string, category', () => {
  test('checks if word is in category dicitionary', () => {
    const x = 'apple';
    const y = 'banjo';
    expect(checkDictionary(x, FnV)).toEqual(true);
    expect(checkDictionary(y, FnV)).toEqual(false);
  });
});




