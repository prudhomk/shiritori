/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import Header from './Header';
// import Dropdown from '../game/Dropdown';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';

export default function Home() {

  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => {
    history.push('/rules');
  };

  return ( 
    <>
      <Header/>
      <div className={styles.splash}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button onClick={handleClick}>{t('home-button')}</button>
      </div>
    </>
  );
}
