/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useWord, useWordList, useCategory } from '../state/GameProvider.jsx';
import { ruleCheck, checkDictionary, checkRepeats } from '../utilities/ruleset.js';
import { FnV, Names, Animals, Pokemon } from '../../data/categories.js';
import styles from '../styles/Game.scss';


export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { category } = useCategory();
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);

  
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
    if(wordList.length >= 1 && ruleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, definedDictionary(category)) && checkRepeats(word, wordList)) {
      //prevState causing issue where first string is being split after state is updated (removing the ... causes word to appear normally, but causes enclosed arrays instead)
      setWordList(prevState => [...prevState, word]);
      startTimer();
    } else if(wordList.length < 1 && checkDictionary(word, definedDictionary(category))) {
      setWordList([word]);
      startTimer();
    } else {
      console.log('Not a valid word');
    }  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
    document.getElementById('player-one').reset();
  };

  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if(!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  function startTimer() {
    setIsActive(!isActive);
  }
  

  return (
    <div>
      <div className={styles.words}>
        {wordList}
      </div>
      <div className={styles.timer}>{seconds}s</div>
      <form onSubmit={handleSubmit} id="player-one">
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
