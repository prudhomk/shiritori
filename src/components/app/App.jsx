/* eslint-disable max-len */
import React, { useState } from 'react';
import { ruleCheck } from '../utilities/ruleset.js';


export default function App() {

  //how to handle game state: within state or via array

  //state option
  const [words, setWords] = useState([]);


  const handleCheck = ({ target }) => {
    // eslint-disable-next-line max-len
    if(words.length > 1 && ruleCheck(words[words.length - 2], words[words.length - 1])) {
      setWords(prevState => [...prevState, target.value]);
      console.log(words);
    } else {
      setWords(target.value);
      console.log(words);
    } 
  };

  //array option
  // const words = [];

  // const wordHandler = ({ target }) => {
  //   if(words.length > 1 && ruleCheck(words[words.length - 2], words[words.length - 1])) {
  //     words.push(target.value);
  //     console.log(words);
  //   } else {
  //     words.push(target.value);
  //     console.log(target.value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  placeholder="Enter a Word"></input>
        <button onClick={handleCheck}>Submit</button>
      </form>
    </div>
  );
}

