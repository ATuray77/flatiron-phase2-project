import React, {useEffect, useState} from 'react'
import "./App.css";



const Home = () =>  {
  const [songs, setSongs] = useState([])

  useEffect(() => {
  const testDeployedApt = async () => {
    let apiResults = await fetch("https://new-json-server.onrender.com/songs")
      .then((r) => r.json())
      .then((data) => data);
      //console.table(apiResults)
      setSongs(apiResults)
  };
  testDeployedApt();
   }, []);

   //handles delete
function handleDelete(id) {
  const updatedSongs = songs.filter((song) => song.id !== id)
  setSongs(updatedSongs)
}

  return (
    <>
      <h1>Home Page</h1>
      {songs.map((song) => (
        <li key={song.id}>
            {song.Title}
            <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Home;
