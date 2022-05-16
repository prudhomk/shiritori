/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useWord, useWordList, useCategory, useLanguage } from '../state/GameProvider.jsx';
import createModal from '../game/Modal';
import Snackbar from '@mui/material/Snackbar';
import { useInterval } from '../state/customHooks.js';
import { ruleCheck, checkDictionary, checkRepeats, checkTimer } from '../utilities/ruleset.js';
import { FnV, Names, Animals, Pokemon } from '../../data/categories.js';
import { やさい } from '../../data/jpcategories.js';
import styles from '../styles/Game.scss';



export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { category } = useCategory();
  const { language } = useLanguage();
  const [count, setCount] = useState(30);
  const [alert, setAlert] = useState(false);
  const [toast, setToast] = useState(false);
  
  const handleOpen = () => {
    setToast(true);
  };

  const handleClose = () => {
    setToast(false);
  };

  //Sourced from Dan Abramov
  useInterval(() => {
    if(count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }, 1000);

  useEffect(() => {
    if(count === 0) {
      setAlert(true);
    }
  });

  // const latestWord = wordList[wordList.length - 1];
  
  const definedDictionary = (category) => {
    if(language === 'en') {
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
    } else if(language === 'jp') {
      switch(category) {
        case 'FnV':
          return やさい;
        default: 
          console.log('No category provided');
          break;
      }
    }
  };
  
  const handleCheck = () => {
    if(wordList.length >= 1 && ruleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, definedDictionary(category)) && checkRepeats(word, wordList) && !checkTimer(count)) {
      setWordList(prevState => [...prevState, word]);
      setCount(30);
    } else if(wordList.length < 1 && checkDictionary(word, definedDictionary(category)) && !checkTimer(count)) {
      setWordList([word]);
      setCount(30);
    } else {
      handleOpen();
    }  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
    document.getElementById('player-one').reset();
  };

  return (
    <div className={styles.game}>
      {alert ? 
        createModal()
        : null
      }
   
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={toast}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Invalid Word, Try Again"
        ContentProps={{
          sx: {
            background: 'red'
          }
        }}
      />
      
      <div className={styles.words}>
        <span>{wordList[wordList.length - 1]}</span>
      </div>

      <form onSubmit={handleSubmit} id="player-one">
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button>Submit</button>
      </form>

      <div className={styles.timer}>
        <div className={styles.innerTimer}>
          <span className={styles.jello}>{count}</span>
        </div>
      </div>

    </div>
  );
}
