import { FC, useContext } from 'react';
import BackgroundContext from '../../contexts/BackgroundTextContext';
import styles from './Button.module.scss';

interface Props {
  text: string;
  defaultBg: string;
}

const Button: FC<Props> = (Props) => {
  const  { setFade, setBgText } = useContext(BackgroundContext);
  // Build bg text
  return (
    <div className={`${styles.btn_container}`}>
      <button 
        type="button" 
        className={`${styles.btn}`}
        onFocusCapture = { () => { 
          setFade(true);
          setBgText(Props.text);
        }}
        onMouseEnter = { () => { 
          setFade(true);
          setBgText(Props.text);
        }}
        onTouchStartCapture = { () => { 
          setFade(true);
          setBgText(Props.text);
        }}
        onMouseLeave = { () => { 
            setFade(true);
            setBgText(Props.defaultBg);
        }}
        onTouchEndCapture={ () => {
          setFade(true);
          setBgText(Props.defaultBg);
        }}
        >
        { Props.text.toUpperCase() }
      </button> 
  </div>
  );
}

export default Button;