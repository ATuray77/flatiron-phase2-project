import React from 'react'
import { Link } from 'react-router-dom'




function SongsList({ songs }) {
 
const renderSongs = Object.keys(songs).map((songID) => (
  <li key={songID}>
    <Link to={`/songs/${songID}`}>{songs[songID].Title}</Link>
  </li>
));


  return (
    <div>
      <label>
        🔎
        <input type='search'/>
      </label>
      <ul>{renderSongs}</ul>
    </div>
  );
}

export default SongsList