import React from 'react';
import './App.scss';
import Pagelayout from './PageLayout';
// import Peotests from './components/Protests/Protests';
// import ProtestInfo from './components/Protests/ProtestInfo';
import CreateProtest from './components/CreateProtest/CreateProtest';

function App(props) {
  return (
    <div className="App">
      <Pagelayout>
        <CreateProtest />
      </Pagelayout>
    </div>
  );
}

export default App;
