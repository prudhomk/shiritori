/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useWord, useWordList, useCategory, useLanguage } from '../state/GameProvider.jsx';
import createModal from '../game/Modal';
import Snackbar from '@mui/material/Snackbar';
import Wordbank from './Wordbank';
import { useInterval } from '../state/customHooks.js';
import { ruleCheck, jpRuleCheck, checkDictionary, checkRepeats, checkTimer } from '../utilities/ruleset.js';
import { FnV, Names, Animals, Pokemon, Marvel } from '../../data/categories.js';
import { Movies } from '../../data/movies.js';
import { やさい, ポケモン } from '../../data/jpcategories.js';
import styles from '../styles/Game.scss';



export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { category } = useCategory();
  const { language } = useLanguage();
  const [count, setCount] = useState(30);
  const [alert, setAlert] = useState(false);
  const [toast, setToast] = useState(false);
  const [altToast, setAltToast] = useState(false);

  //Toast Handlers
  const handleOpen = () => {
    setToast(true);
  };

  const handleClose = () => {
    setToast(false);
  };

  const handleAltOpen = () => {
    setAltToast(true);
  };

  const handleAltClose = () => {
    setAltToast(false);
  };

  // const startingLetter = () => {
  //   let alphabet = 0;
  //   alphabet = Math.floor(Math.random() * 26);
  //   return alphabet;
  // };


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
        case 'Movies':
          return Movies;
        case 'Marvel':
          return Marvel;
        default:
          console.log('No category provided');
          break;
      }
    } else if(language === 'jp') {
      switch(category) {
        case 'FnV':
          return やさい;
        case 'Pokemon':
          return ポケモン;
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
    } else if(!checkRepeats(word, wordList)) {
      handleAltOpen();
    } else if(language === 'jp') {
      if(wordList.length >= 1 && jpRuleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, definedDictionary(category)) && checkRepeats(word, wordList) && !checkTimer(count)) {
        setWordList(prevState => [...prevState, word]);
        setCount(30);
      } else if(wordList.length < 1 && checkDictionary(word, definedDictionary(category)) && !checkTimer(count)) {
        setWordList([word]);
        setCount(30);
      }  else if(!checkRepeats(word, wordList)) {
        handleAltOpen();
      }
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

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={altToast}
        autoHideDuration={3000}
        onClose={handleAltClose}
        message="Word already guessed"
        ContentProps={{
          sx: {
            background: 'yellow',
            color: 'black'
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

      <div>
        <Wordbank/>
      </div>
    </div>
  );
}
