/* eslint-disable max-len */
import React from 'react';
import { Categories, FnV, Names, Animals } from '../../data/categories.js';
import { useCategory } from '../state/GameProvider';

export default function Rules() {

  const { category, setCategory } = useCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="radio" name="category" value='Fruits "\u0026" Vegetables'></input>
        <input type="radio" name="category" value="Names"></input>
        <input type="radio" name="category" value="Animals"></input>
        <input type="radio" name="category"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
