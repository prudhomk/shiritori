/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../state/GameProvider.jsx';
// import Dropdown from '../game/Dropdown';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';

export default function Home() {

  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { setLanguage } = useLanguage();

  const handleClick = () => {
    history.push('/rules');
  };

  return ( 
    <>
      <div className={styles.localize}>
        <button onClick={() => {
          i18n.changeLanguage('jp');
          setLanguage('jp');
        }}>
        日本語
        </button>
        <button onClick={() => {
          i18n.changeLanguage('en');
          setLanguage('en');
        }}>
        EN
        </button>
      </div>
      {/* <div>
        <Dropdown/>
      </div> */}
      <div className={styles.splash}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button onClick={handleClick}>{t('home-button')}</button>
      </div>
    </>
  );
}
