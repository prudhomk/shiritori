/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';

export default function Home() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/rules');
  };

  return ( 
    <>
      <h1>Welcome to Shiritori!</h1>
      <p>
        Shiritori(known across the world under many different names) is a word association game.
        Players choose words based on a category, with each word needing to start with the last character of the previous word.
        Should a player be unable to come up with a valid word, they lose the game.
      </p>
      <button onClick={handleClick}>Play a Game</button>
    </>
  );
}
