import { FC, useContext } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Button.module.scss';

interface Props {
  text: string;
  defaultBg: string;
}

const Button: FC<Props> = (Props) => {
  const  { setBgText } = useContext(BackgroundContext);
  // Build bg text
  return (
    <div className={`${styles.btn_container}`}>
      <button 
        type="button" 
        className={`${styles.btn}`}
        onMouseEnter = { () => { 
          setBgText(Props.text);
        }}
        onTouchStartCapture = { () => { 
          setBgText(Props.text);
        }}
        onMouseLeave = { () => { 
            setBgText(Props.defaultBg);
        }}
        onTouchEndCapture={ () => {
          setBgText(Props.defaultBg);
        }}
        >
        { Props.text.toUpperCase() }
      </button> 
  </div>
  );
}

export default Button;