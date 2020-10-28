import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagelayout from './PageLayout';
import Peotests from './components/Protests/Protests';
import ProtestInfo from './components/Protests/ProtestInfo';
import CreateProtest from './components/CreateProtest/CreateProtest';
import LiveMode from './components/LiveMode/LiveMode';

function App(props) {
  return (
    <div className="App">
      <Pagelayout>
        <Switch>
          <Route path="/" exact component={Peotests} />
          <Route path="/protest/:id" render={(routeProps) => {
            return <ProtestInfo {...routeProps} />
          }} />
          <Route path="/livemode/:id" render={(routeProps => {
            return <LiveMode {...routeProps} />
          })} />
          {/* component={LiveMode} /> */}
          <Route path="/create" component={CreateProtest} />
        </Switch>
      </Pagelayout>
    </div>
  );
}

export default App;
