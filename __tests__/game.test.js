/* eslint-disable max-len */
import { ruleCheck, jpRuleCheck, checkDictionary, checkRepeats, checkTimer, remainingOptions } from '../src/components/utilities/ruleset.js';
import { FnV } from '../src/data/categories.js';
import * as wanakana from 'wanakana';

describe('ruleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter', () => {
    const x = 'apple';
    const y = 'eggplant';
    const z = 'fish';
    expect(ruleCheck(x, y)).toEqual(true);
    expect(ruleCheck(x, z)).toEqual(false);
  });

});

describe('jpRuleCheck(string1, string2)', () => {
  test('checks if first letter matches last letter, edge case for extended characters', () => {
    const w = 'ピカチュ';
    const x = 'ラクダ';
    const y = 'ダルマー';
    const z = 'マカロニ';

    console.log(w.charAt(w.length - 1));

    expect(jpRuleCheck(x, y)).toEqual(true);
    expect(jpRuleCheck(y, z)).toEqual(true);
    expect(jpRuleCheck(x, z)).toEqual(false);
  });
});

describe('checkDictionary(string, category)', () => {
  test('checks if word is in category dicitionary', () => {
    const x = 'apple';
    const y = 'banjo';
    const z = 'bird\'s eye chili';
    expect(checkDictionary(x, FnV)).toEqual(true);
    expect(checkDictionary(y, FnV)).toEqual(false);
    expect(checkDictionary(z, FnV)).toEqual(true);
  });
});

describe('checkRepeats(string, wordList)', () => {
  test('checks if a word has been said', () => {
    const words = ['apple', 'eggplant', 'chive'];
    const x = 'apple';
    const y = 'banana';

    expect(checkRepeats(x, words)).toEqual(false);
    expect(checkRepeats(y, words)).toEqual(true);
  });
});

describe('checkTimer(count)', () => {
  test('checks if timer has run out', () => {
    const clock = 1;
    const timer = 0;

    expect(checkTimer(clock)).toEqual(false);
    expect(checkTimer(timer)).toEqual(true);
  });
});

describe('simulates a game: check if word is in dictionary, add to state, check if next word is in dictionary and follows rules', () => {
  test('game test', () => {
    const gameArr = ['apple'];
    const words = ['egg', 'eggplant', 'banana', 'eggplant'];
    for(let i = 0; i < words.length; i++) {
      console.log(words[i]);
      if(ruleCheck(gameArr[0], words[i]) && checkDictionary(words[i], FnV) && checkRepeats(words[i], gameArr)) {
        gameArr.push(words[i]);
      } else {
        console.log('Rules have been broken');
      }
    }
    expect(gameArr).toEqual(['apple', 'eggplant']);
  });
});

describe('checks if there are any words available', () => {
  test('remainingOptions test', () => {
    const dictionary = [
      'apple',
      'aardvark',
      'balloon',
      'eggplant',
      'era',
      'ebb',
      'frank',
      'zebra'
    ];

    const words = ['apple', 'eggplant'];
    const words2 = ['zebra', 'apple'];
    const words3 = ['era', 'apple', 'ebb'];


    expect(remainingOptions(words, dictionary)).toEqual(false);
    expect(remainingOptions(words2, dictionary)).toEqual(true);
    expect(remainingOptions(words3, dictionary)).toEqual(true);
  });
});

describe('testing character matching for jp', () => {
  test('check if katakana matches hiragana', () => {
    const x = 'りんご';
    const y = 'ごりら';
    const a = 'リンゴ';
    const b = 'ゴリラ';
    const x2 = wanakana.toKatakana(x);
    const b2 = wanakana.toHiragana(b);

    expect(ruleCheck(x2, b)).toEqual(true);
    expect(ruleCheck(x, b2)).toEqual(true);
  });
});
