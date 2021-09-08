import { FC } from 'react';
import styles from './ProfessionalTitle.module.scss';

interface Props {
  text: string;
}

const ProfessionalTitle: FC<Props> = (Props) => {
  // Build bg text
  return (
    <div className={`${styles.txt_container}`}>
      <p className={`${styles.txt}`}>
        { Props.text }
      </p> 
  </div>
  );
}

export default ProfessionalTitle;