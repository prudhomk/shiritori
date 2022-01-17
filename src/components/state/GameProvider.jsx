import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [words, setWords] = useState('');
  const [wordArr, setWordArr] = useState([]);

  return (
    <GameContext.Provider value={{
      words,
      setWords,
      wordArr,
      setWordArr
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useWords = () => {
  const { words, setWords } = useContext(GameContext);

  return { words, setWords };
};

export const useWordArray = () => {
  const { wordArr, setWordArr } = useContext(GameContext);

  return { wordArr, setWordArr };
};
