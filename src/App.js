import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EventDisplay from './pages/EventDisplay';
import EventResult from './pages/EventResult';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={EventDisplay} exact />
        <Route path="/eventresult/:eventId" component={EventResult} />
      </Switch>
    </div>
  );
}

export default App;
