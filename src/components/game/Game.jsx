/* eslint-disable max-len */
import React from 'react';
import { useWord, useWordList, useCategory } from '../state/GameProvider.jsx';
import { ruleCheck, checkDictionary } from '../utilities/ruleset.js';
import { FnV, Names, Animals } from '../../data/categories.js';

export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { category } = useCategory();

  const definedDictionary = (category) => {
    switch(category) {
      case 'FnV':
        return FnV;
      case 'Animals':
        return Animals;
      case 'Names':
        return Names;
    }
  };

  const handleCheck = () => {
    console.log(word);
    console.log(category);
    
    if(wordList.length > 1 && ruleCheck(wordList[wordList.length - 2], wordList[wordList.length - 1]) && checkDictionary(word, definedDictionary(category))) {
      console.log('hello');
      setWordList(prevState => [...prevState, word]);
    } else if(wordList.length < 1 && checkDictionary(word, FnV)) {
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
