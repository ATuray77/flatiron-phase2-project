import React, {useEffect, useState} from 'react'
import "./App.css";



const Home = () =>  {
  const [songs, setSongs] = useState([])

  useEffect(() => {
  const testDeployedApt = async () => {
    let apiResults = await fetch("https://new-json-server.onrender.com/songs")
      .then((r) => r.json())
      .then((data) => data);
      console.table(apiResults)
      setSongs(apiResults)
  };
  testDeployedApt();
   }, []);

  return (
    <>
    <h1>Home Page</h1>
      {songs.map(song => (
        <p key={song.id}>{song.Title}</p>
      ))}
    </>
  );
};

export default Home;
