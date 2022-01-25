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

describe('simulates a game: check if word is in dictionary, add to state, check if next word is in dictionary and follows rules', () => {
  test('game test', () => {
    const gameArr = ['apple'];
    const words = ['egg', 'eggplant', 'banana'];
    for(let i = 0; i < words.length; i++) {
      console.log(words[i]);
      if(ruleCheck(gameArr[0], words[i]) && checkDictionary(words[i], FnV)) {
        gameArr.push(words[i]);
      } else {
        console.log('Rules have been broken');
      }
    }
    expect(gameArr).toEqual(['apple', 'eggplant']);
  });
});




