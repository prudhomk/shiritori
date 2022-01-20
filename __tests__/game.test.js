import { ruleCheck } from '../src/components/utilities/ruleset.js';

describe('ruleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter', () => {
    const x = 'apple';
    const y = 'eggplant';
    const z = 'fish';

    expect(ruleCheck(x, y)).toEqual(true);
    expect(ruleCheck(x, z)).toEqual(false);
  });

});
