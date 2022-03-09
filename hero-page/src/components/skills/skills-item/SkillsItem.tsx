import React, { FC } from 'react';
import styles from './SkillsItem.module.scss';

interface Props {
  skill: string;
}

const SkillsItem: FC<Props> = (Props) => {
  return (
  <div className={styles.skill_container}>
    <div className={styles.skill}>
    { Props.skill }
    </div>
  </div>
  );
}

export default SkillsItem;