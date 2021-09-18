import React, { FC } from "react";
import SkillItem from './skills-item/SkillsItem';
import styles from './Skills.module.scss'

interface Props {
  skills: string[]
}

const Skills: FC<Props> = (Props) => {
  return(
    <div className={styles.skills_container}>
      {
      Props.skills.map((skill) => {
        return <SkillItem skill={skill}/>
      })      
      }
    </div>
  );
}

export default Skills;