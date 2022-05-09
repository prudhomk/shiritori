/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useCategory } from '../state/GameProvider';
import { useTranslation } from 'react-i18next';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';
import ruleStyles from '../styles/Rules.scss';

export default function Rules() {

  const { category, setCategory } = useCategory();
  const { t, i18n } = useTranslation();
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
      <div className={styles.localize}>
        <button onClick={() => {
          i18n.changeLanguage('jp');
        }}>
        日本語
        </button>
        <button onClick={() => {
          i18n.changeLanguage('en');
        }}>
        EN
        </button>
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
              <input type="radio" name="category" value="FnV"></input>
              {t('cat1')}
              <p>Everything red, green and in-between</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Names"></input>
              {t('cat2')}
              <p>What's in a name?  First names only.</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Animals"></input>
              {t('cat3')}
              <p>Lions, tigers, and bears. Oh My!</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Pokemon"></input>
              {t('cat4')}
              <p>Gotta name 'em all!</p>
            </label>
            <label onClick={handleChecked}>
              <input type="radio" name="category" value="Marvel vs DC"></input>
              {t('cat5')}
              <p>Nerds only</p>
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
          <button>{t('submit')}</button>
        </form>
      </div>
    </>
  );
}
