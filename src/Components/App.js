
import { Route, Switch } from "react-router-dom";
import "./App.css"
import NavBar from './NavBar';
import SongsPage from './SongsPage';
import SongForm from './SongForm';
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

function App() {
 const [ songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs))  
  }, [])  

 if (!songs) return <h2>Loading...</h2>; 

function handleOnFormSubmitted() {
  
}
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/songs">
          <SongsPage songs={songs} />
        </Route>
        <Route path="/form">
          <SongForm onFormSubmitted={handleOnFormSubmitted}form={"form"} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
