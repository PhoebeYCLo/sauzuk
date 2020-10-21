import React from 'react';
import './App.scss';
import Pagelayout from './PageLayout';
import Peotests from './components/Protests/Protests';

function App(props) {
  return (
    <div className="App">
      <Pagelayout>
        <Peotests />
      </Pagelayout>
    </div>
  );
}

export default App;
