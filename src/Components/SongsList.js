
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



function SongsList() {
  const [ songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((r) => r.json())
      .then((data) => setSongs(data.songs))
  }, []);

const renderSongs = Object.keys(songs).map((songID) => (
  <li key={songID}>
    <Link to={`/songs/${songID}`}>{songs[songID].Title}</Link>

  </li>
));

  return (
    <ul>renderSongs</ul>
  )
}

export default SongsList