/* eslint-disable max-len */
import React, { useState } from 'react';
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
  const [style, setStyle] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/game');
  };

  const handleChecked = (e) => {
    setStyle({});
    setCategory(e.target.value);
    setStyle({ [e.target.value]: true });
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
            <label onClick={handleChecked} className={ style.FnV ? ruleStyles.FnV : ruleStyles.radio}>
              <input type="radio" name="category" value="FnV" required></input>
              {t('cat1')}
              <p>Everything red, green and in-between</p>
            </label>
            <label onClick={handleChecked} className={ style.Names ? ruleStyles.Names : ruleStyles.radio}>
              <input type="radio" name="category" value="Names" required></input>
              {t('cat2')}
              <p>What's in a name?  First names only.</p>
            </label>
            <label onClick={handleChecked} className={ style.Animals ? ruleStyles.Animals : ruleStyles.radio}>
              <input type="radio" name="category" value="Animals" required></input>
              {t('cat3')}
              <p>Lions, tigers, and bears. Oh My!</p>
            </label>
            <label onClick={handleChecked} className={ style.Pokemon ? ruleStyles.Pokemon : ruleStyles.radio}>
              <input type="radio" name="category" value="Pokemon" required></input>
              {t('cat4')}
              <p>Gotta name 'em all!</p>
            </label>
            <label onClick={handleChecked} className={ style.Movies ? ruleStyles.Movies : ruleStyles.radio}>
              <input type="radio" name="category" value="Movies" required></input>
              {t('cat5')}
              <p>Movies that don't end with a number or puncuation!</p>
            </label>
            <label onClick={handleChecked} className={ style.Marvel ? ruleStyles.Marvel : ruleStyles.radio}>
              <input type="radio" name="category" value="Marvel" required></input>
              {t('cat6')}

              <p>Nerds only!</p>
            </label>
          </fieldset>

          <button className={ruleStyles.submit}>{t('submit')}</button>
        </form>

        <div className={ruleStyles.link}>
          <a href="https://forms.gle/VceAwq19J5rTb3ty7">Feedback</a>
        </div>
      </div>
    </>
  );
}
