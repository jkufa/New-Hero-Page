import React, { useState } from 'react';
import Background from './components/background/Background';
import Button from './components/button/Button';
import ProfessionalTitle from './components/professional-title/ProfessionalTitle';
// import { BackgroundContext } from './contexts/BackgroundContext';
import './styles/App.scss';


function App() {
  const [fadingIn, setFadeIn] = useState<boolean>(true);
  const [bouncingFirstName, setFirstNameBounce] = useState<boolean>(false);
  const [bouncingLastName, setLastNameBounce] = useState<boolean>(false);

  return (
    <div className="App">
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
        <Button text={"skills"}></Button>
        <Button text={"experience"}></Button>
        <Button text={"projects"}></Button>
        <Button text={"about"}></Button>
        <Button text={"resume"}></Button>
      </div>
      </div>
      <div className="bg-container">
       <Background bgText={'jackkufa'} ></Background>
      </div>
      {/* BAR LINE SVG CODE */}
    </div>
  );
}

export default App;
