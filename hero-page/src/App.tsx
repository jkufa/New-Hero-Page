import React, { useState } from 'react';
import Background from './components/background/Background';
import ProfessionalTitle from './components/professional-title/ProfessionalTitle';
import BackgroundContext from './contexts/BackgroundTextContext';
import './styles/App.scss';
import ButtonWindow from './components/button-window/ButtonWindow';
import Skills from './components/Skills/Skills';


function App() {
  const defaultBg: string = 'jackkufa';
  const [fadingIn, setFadeIn] = useState<boolean>(true);
  const [bouncingFirstName, setFirstNameBounce] = useState<boolean>(false);
  const [bouncingLastName, setLastNameBounce] = useState<boolean>(false);
  const [bgText, setBgText] = useState<string>(defaultBg);
  const [fade, setFade] = useState<boolean>(true);
  const value = { fade, setFade, bgText, setBgText };

  const skills = ["Typescript", "Javascript", "React", "Python", "C#", "HTML5/CSS","SCSS/LESS",".NET","Flask","Linux","Git","Storybook","Postman","Jira"];

  return (
    <div className="App">
    <BackgroundContext.Provider value={ value }>
      <div className="content-container"
           onAnimationEnd={() => setFadeIn(() => false)}
      >
      <div className="title-container">
        <h1 
          onMouseEnter={() => setFirstNameBounce(() => true)}
          onTouchStartCapture={() => setFirstNameBounce(() => true)}
          onAnimationEnd={() => setFirstNameBounce(() => false)}
          className={`
                     firstName 
                     ${bouncingFirstName && !fadingIn? 'bouncing' : ''}
                     ${fadingIn ? 'fadeIn' : ''}
                    `}
        >
          JACK
        </h1>
        <h1
          onMouseEnter={() => setLastNameBounce(() => true)}
          onTouchStartCapture={() => setLastNameBounce(() => true)}
          onAnimationEnd={() => setLastNameBounce(() => false)} 
          className={`
                     lastName 
                     ${bouncingLastName && !fadingIn? 'bouncing' : ''}
                     ${fadingIn ? 'fadeIn' : ''}
                    `}
        >
          KUFA
        </h1>
        <div className={`
                        pro-title
                        ${fadingIn ? 'fadeIn' : ''}
                        `}
        >
          <ProfessionalTitle text={'Front-End Software Engineer'} ></ProfessionalTitle>
        </div>
      </div>
      <div className="btns-container">
        <ButtonWindow defaultBg = { defaultBg } title= {"skills"}>
          <Skills skills={skills}/>
        </ButtonWindow>
        <ButtonWindow defaultBg = { defaultBg } title= {"experience"}></ButtonWindow>
        <ButtonWindow defaultBg = { defaultBg } title= {"projects"}></ButtonWindow>
        <ButtonWindow defaultBg = { defaultBg } title= {"about"}></ButtonWindow>
        <ButtonWindow defaultBg = { defaultBg } title= {"resume"}></ButtonWindow>
      </div>
      </div>
      <div className="bg-container">
         <Background bgText={ bgText } ></Background>
      </div>
    </BackgroundContext.Provider>
    </div>
  );
}

export default App;
