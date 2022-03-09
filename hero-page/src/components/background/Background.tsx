import React, { FC, useContext } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Background.module.scss';

const ROW_SIZE = 17;
const COL_SIZE = 18;

interface Props {
  bgText: string;
}

// TODO: Find a way to delay text transform
const Background: FC<Props> = () => {
  const  { fade, setFade, bgText } = useContext(BackgroundContext);
  const rows = Array(ROW_SIZE).fill(Array(COL_SIZE).fill(bgText + " "));
  
  let i = 0;

  // Build bg text
  return (
    <div className={`${fade ? styles.fadeInBg : ''} ${styles.bg}`}
         onAnimationEnd={() => setFade(false)}
    >
      {
        rows.map((cols) => {
          i = 1 - i;
          return (
          <div className={`${styles.marquee_container}`}>
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