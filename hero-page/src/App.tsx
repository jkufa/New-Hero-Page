import React from 'react';
import Background from './components/background/Background';
// import Button from './components/button/Button';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="name-container">
        <h1 className="lastName">KUFA</h1>
        <h1 className="firstName">JACK</h1>
      </div>
      <div className="bg-container">
       <Background bgText={'jackkufa'} ></Background>
      </div>
    </div>
  );
}

export default App;
