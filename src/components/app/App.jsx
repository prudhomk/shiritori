import React from 'react';
import { useWords, useWordArray } from '../state/GameProvider.jsx';
import { ruleCheck } from '../utilities/ruleset.js';

export default function App() {

  const { words, setWords } = useWords();
  const { wordArr, setWordArr } = useWordArray();

  const handleChange = ({ target }) => {
    setWords(target.value);
  };

  const handleWord = () => {
    for(let i = 0; i < wordArr.length; i++) {
      if(ruleCheck(wordArr[i], wordArr[i + 1])) {
        setWordArr(prevState => [...prevState, words]);
        console.log(wordArr);
      } else {
        console.log('Submit a different word');
      }
    }
  };

  return (
    <div>
      <input onChange={handleChange} placeholder="Enter a Word"></input>
      <button onClick={handleWord}>Submit</button>
    </div>
  );
}

