
import { Route, Switch } from "react-router-dom";
import "./App.css"
import NavBar from './NavBar';
import Home from "./Home";
import SongsPage from './SongsPage';
import SongForm from './SongForm';
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

function App() {
  const [songs, setSongs] = useState([]);

  //to handle delete
//const { id } = songs

  // function handleDeleteSong(deletedSong) {
  //   songs.filter((song) => song.id !== deletedSong.id);
  //   setSongs(songs);
  // }

  function handleOnFormSubmitted(addedSong) {
    setSongs([...songs, addedSong]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);

  if (!songs) return <h2>Loading...</h2>;

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/songs">
          <SongsPage songs={songs} setSongs={setSongs}  />
        </Route>
        <Route path="/form">
          <SongForm onFormSubmitted={handleOnFormSubmitted} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
