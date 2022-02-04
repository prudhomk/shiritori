/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import styles from '../styles/Main.scss';

export default function Home() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/rules');
  };

  return ( 
    <>
      <div className={styles.splash}>
        <h1>Welcome to Last 2 First!</h1>
        <p>
        Last 2 First is a is a word association game based on Shiritori(known across the world under many different names). 
        Players choose words based on a category, with each word needing to start with the last character of the previous word.
        Should a player be unable to come up with a valid word, they lose the game.
        </p>
        <button onClick={handleClick}>Play a Game</button>
      </div>
    </>
  );
}
