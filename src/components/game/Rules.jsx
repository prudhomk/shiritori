/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useCategory } from '../state/GameProvider';

export default function Rules() {

  const { category, setCategory } = useCategory();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/game');
  };

  const handleChecked = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <fieldset onChange={handleChecked}>
          <input type="radio" name="category" value="FnV"></input>
          <label>Fruits and Vegetables</label>
          <input type="radio" name="category" value="Names"></input>
          <label>Names</label>
          <input type="radio" name="category" value="Animals"></input>
          <label>Animals</label>
          <button>Submit</button>
        </fieldset>
      </form>
    </>
  );
}
