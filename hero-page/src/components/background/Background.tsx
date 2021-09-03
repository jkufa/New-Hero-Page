import React, { FC } from 'react';
import styles from './Background.module.scss';

const ROWS_SIZE = 20
const COLS_SIZE = 14;

interface Props {
  bgText: string;
}

const Background: FC<Props> = (Props) => {
  // Build bg text
  const rows = Array(ROWS_SIZE).fill(<span>{ Array(COLS_SIZE).fill(Props.bgText + " ") }</span>);
  let i:number = 0;
  return (
    <div className={styles.bg}>
      <div className={styles.bg_texts}>
        {
          rows.map((cols) => {
            i = 1 - i;
            return <h1 className={i ? styles.pos : styles.neg}>{ cols }</h1>
          })
        }
      </div>
  </div>
  );
}

export default Background;