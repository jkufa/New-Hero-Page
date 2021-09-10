import React, { useState } from 'react';
import Background from './components/background/Background';
import Button from './components/button/Button';
import ProfessionalTitle from './components/professional-title/ProfessionalTitle';
import BackgroundContext from './contexts/BackgroundTextContext';
import './styles/App.scss';


function App() {
  const defaultBg: string = 'jackkufa';

  const [fadingIn, setFadeIn] = useState<boolean>(true);
  const [bouncingFirstName, setFirstNameBounce] = useState<boolean>(false);
  const [bouncingLastName, setLastNameBounce] = useState<boolean>(false);
  const [bgText, setBgText] = useState<string>(defaultBg);
  const value = { bgText, setBgText };

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
        <Button defaultBg = { defaultBg } text={"skills"}></Button>
        <Button defaultBg = { defaultBg } text={"experience"}></Button>
        <Button defaultBg = { defaultBg } text={"projects"}></Button>
        <Button defaultBg = { defaultBg } text={"about"}></Button>
        <Button defaultBg = { defaultBg } text={"resume"}></Button>
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
