import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";




function SongsList({ songs }) {
 
const renderSongs = Object.keys(songs).map((songID) => (
  <li key={songID}>
    <Link to={`/songs/${songID}`}>{songs[songID].Title}</Link>
    <button>  🗑  </button>
  </li>
));


  return (
    <div>
      <label>
        🔎
        <input type='search' placeholder='search...'/>
      </label>
      <ul>{renderSongs}</ul>
    </div>
  );
}

export default SongsList