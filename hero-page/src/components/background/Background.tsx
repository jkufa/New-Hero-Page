import React, { FC, useContext } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Background.module.scss';

const ROWS_SIZE = 15;
const COLS_SIZE = 15;

interface Props {
  bgText: string;
}


const Background: FC<Props> = (Props) => {
  // Build bg text
  const  { bgText } = useContext(BackgroundContext);
  let i:number = 0;
  const rows = Array(ROWS_SIZE).fill(Array(COLS_SIZE).fill(bgText + " "));
  return (
    <div className={styles.bg}>
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