import React from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.css"
import NavBar from './NavBar';
import SongsPage from './SongsPage';
import SongForm from './SongForm';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/songs">
          <SongsPage songs={"songs"}/>
        </Route>
        <Route path="/form">
          <SongForm form={"form"}/>
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
