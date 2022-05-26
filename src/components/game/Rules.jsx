/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useCategory } from '../state/GameProvider';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import '../../i18n/config.js';
import ruleStyles from '../styles/Rules.scss';


export default function Rules() {

  const { setCategory } = useCategory();
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/game');
  };

  const handleChecked = (e) => {
    setCategory(e.target.value);
  };

  const handleHome = () => {
    history.push('/');
  };

  return (
    <>
      <Header/>
      <div>
        <img onClick={handleHome} src="wordchain-logo.png"/>
      </div>
      <div className={ruleStyles.rules}>
        <h1>{t('rules')}</h1>
        <p>
          {t('instructions')}
        </p>

        <form  onSubmit={handleSubmit}>
          <fieldset>
            <legend>{t('categories')}</legend>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="FnV" required></input>
              {t('cat1')}
              <p>Everything red, green and in-between</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Names" required></input>
              {t('cat2')}
              <p>What's in a name?  First names only.</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Animals" required></input>
              {t('cat3')}
              <p>Lions, tigers, and bears. Oh My!</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Pokemon" required></input>
              {t('cat4')}
              <p>Gotta name 'em all!</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="MarvelvsDC" required></input>
              {t('cat5')}
             
              <p>Nerds only: under construction</p>
            </label>
          </fieldset>
          {/* <fieldset>
          <legend>Penalties</legend>
          <input type="radio" name="penalty" value="None"></input>
          <label>No Penalty</label>
          <input type="radio" name="penalty" value="Time"></input>
          <label>Lose 10 Seconds</label>
          <input type="radio" name="penalty" value="Turns"></input>
          <label>Take two turns</label>
          <input type="radio" name="penalty" value="Instant"></input>
          <label>Instant Loss</label>
        </fieldset> */}
          <button className={ruleStyles.submit}>{t('submit')}</button>
        </form>

        <div className={ruleStyles.link}>
          <a href="https://forms.gle/VceAwq19J5rTb3ty7">Feedback</a>
        </div>
      </div>
    </>
  );
}
