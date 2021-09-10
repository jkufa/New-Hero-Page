import React, { FC, useContext, useState } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Background.module.scss';

const ROWS_SIZE: number = 15;
const COLS_SIZE: number = 15;
const STR_LEN: number = 8;

interface Props {
  bgText: string;
}

const Background: FC<Props> = () => {
  const  { bgText } = useContext(BackgroundContext);
  const [fadingIn, setFadeIn] = useState<boolean>(true);

  let hasTransitioned: boolean = false;
  let i: number = 0;
  // Build bg text
  const rows = Array(ROWS_SIZE).fill(Array(COLS_SIZE).fill(bgText + " "));
  return (
    <div className={`${fadingIn ? styles.fadeInBg : ''} ${styles.bg}`}
         onAnimationEnd={() => setFadeIn(() => false)}
    >
      {
        rows.map((cols) => {
          i = 1 - i;
          return (
          <div className={`${!hasTransitioned ? styles.has_transitioned : styles.has_not_transitioned } ${styles.marquee_container}`}>
            <h1 className={`${styles.marquee}`}>
              <span className={`${i ? styles.rtl : styles.ltr}`}>{ cols }</span> 
            </h1>
            <h1 className={`${styles.marquee} ${styles.marquee2}`}>
              <span className={`${i ? styles.rtl : styles.ltr}`}>{ cols }</span> 
            </h1>
          </div>)
        })
      }
  </div>
  );
}

export default Background;