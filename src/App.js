import React from 'react';
import './App.scss';
import Pagelayout from './PageLayout';
// import Peotests from './components/Protests/Protests';
import ProtestInfo from './components/Protests/ProtestInfo';

function App(props) {
  return (
    <div className="App">
      <Pagelayout>
        <ProtestInfo />
      </Pagelayout>
    </div>
  );
}

export default App;
