import React, { useState } from 'react';
import Background from './components/background/Background';
// import Button from './components/button/Button';
import './styles/App.scss';

function App() {
  const [fadingIn, setFadeIn] = useState<boolean>(true);
  const [bouncingFirstName, setFirstNameBounce] = useState<boolean>(false);
  const [bouncingLastName, setLastNameBounce] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="name-container"
           onAnimationEnd={() => setFadeIn(() => false)}
      >
        <h1 
          onMouseEnter={() => setFirstNameBounce(() => true)}
          onAnimationEnd={() => setFirstNameBounce(() => false)}
          className={`
                     firstName 
                     ${bouncingFirstName ? 'bouncing' : ''}
                     ${fadingIn ? 'fadeIn' : ''}
                    `}
        >
          JACK
        </h1>
        <h1
          onMouseEnter={() => setLastNameBounce(() => true)}
          onAnimationEnd={() => setLastNameBounce(() => false)} 
          className={`
                     lastName 
                     ${bouncingLastName ? 'bouncing' : ''}
                     ${fadingIn ? 'fadeIn' : ''}
                    `}
        >
          KUFA
        </h1>
      </div>
      <div className="bg-container">
       <Background bgText={'jackkufa'} ></Background>
      </div>
    </div>
  );
}

export default App;
