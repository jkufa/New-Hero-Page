import { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  text: string;
}

const Button: FC<Props> = (Props) => {
  // Build bg text
  return (
    <div className={`${styles.btn_container}`}>
      <button type="button" className={`${styles.btn}`}>
        { Props.text.toUpperCase() }
      </button> 
  </div>
  );
}

export default Button;