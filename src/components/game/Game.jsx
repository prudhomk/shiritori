/* eslint-disable max-len */
import React from 'react';
import { useWord, useWordList } from '../state/GameProvider.jsx';
import { ruleCheck, checkDictionary } from '../utilities/ruleset.js';

export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();

  const handleCheck = () => {
    console.log(word);
    // eslint-disable-next-line max-len
    if(wordList.length > 1 && ruleCheck(wordList[wordList.length - 2], wordList[wordList.length - 1])) {
      console.log('hello');
      setWordList(prevState => [...prevState, word]);
    } else if(wordList.length < 1) {
      setWordList(word);
      console.log(wordList);
    } else {
      console.log('Not a valid word');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
