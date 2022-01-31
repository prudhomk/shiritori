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
      <h1>Rules</h1>
      <p>
        Players will take turns submitting words matching the chosen category.  
        Each player has 30 seconds per turn to come up with a word.  Penalties can be imposed if selected.
        Each word must begin with the last character of the previous word (ex: apple, eggplant, tree).
        The game ends when a player cannot submit a valid word, or their timer has run out.
      </p>
      <h2>Categories</h2>
      <form  onSubmit={handleSubmit}>
        <fieldset onChange={handleChecked}>
          <legend>Categories</legend>
          <input type="radio" name="category" value="FnV"></input>
          <label>Fruits and Vegetables</label>
          <input type="radio" name="category" value="Names"></input>
          <label>Names</label>
          <input type="radio" name="category" value="Animals"></input>
          <label>Animals</label>
          <input type="radio" name="category" value="Marvel vs DC"></input>
          <label>Marvel vs DC</label>
        </fieldset>
        <fieldset>
          <legend>Penalties</legend>
          <input type="radio" name="penalty" value="None"></input>
          <label>No Penalty</label>
          <input type="radio" name="penalty" value="Time"></input>
          <label>Lose 10 Seconds</label>
          <input type="radio" name="penalty" value="Turns"></input>
          <label>Take two turns</label>
          <input type="radio" name="penalty" value="Instant"></input>
          <label>Instant Loss</label>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
}
