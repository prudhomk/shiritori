/* eslint-disable max-len */
import React, { useState } from 'react';
import { useWord, useWordList, useCategory } from '../state/GameProvider.jsx';
import { useInterval } from '../state/customHooks.js';
import { useHistory } from 'react-router';
import { ruleCheck, checkDictionary, checkRepeats, checkTimer } from '../utilities/ruleset.js';
import { FnV, Names, Animals, Pokemon } from '../../data/categories.js';
import styles from '../styles/Game.scss';


export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { category } = useCategory();
  const [count, setCount] = useState(30);
  const history = useHistory();
  
  //Sourced from Dan Abramov
  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  


  
  const definedDictionary = (category) => {
    switch(category) {
      case 'FnV':
        return FnV;
      case 'Animals':
        return Animals;
      case 'Names':
        return Names;
      case 'Pokemon':
        return Pokemon;
      default: 
        console.log('No category provided');
        break;
    }
  };

  
  const handleCheck = () => {
    if(wordList.length >= 1 && ruleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, definedDictionary(category)) && checkRepeats(word, wordList) && !checkTimer(count)) {
      //prevState causing issue where first string is being split after state is updated (removing the ... causes word to appear normally, but causes enclosed arrays instead)
      setWordList(prevState => [...prevState, word]);
      setCount(30);
    } else if(wordList.length < 1 && checkDictionary(word, definedDictionary(category)) && !checkTimer(count)) {
      setWordList([word]);
      setCount(30);
    } else if(checkTimer(count)) {
      //Popup/modal 'Game Over'
      history.push('/results');
    } else {
      //popup 'Invalid answer'
      console.log('Not a valid word');
    }  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
    document.getElementById('player-one').reset();
  };

  return (
    <div>
      <div className={styles.words}>
        {wordList}
      </div>
      <div className={styles.timer}>{count}s</div>
      <form onSubmit={handleSubmit} id="player-one">
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
