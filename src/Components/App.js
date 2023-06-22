import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import SongsPage from './SongsPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/songs">
          <SongsPage songs={"songs"}/>
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
