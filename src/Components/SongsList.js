import React from 'react'
import { Link } from 'react-router-dom'




function SongsList({ songs }) {
  console.log(songs)
 
const renderSongs = Object.keys(songs).map((songID) => (
  <li key={songID}>
    <Link to={`/songs/${songID}`}>{songs[songID].Title}</Link>
  </li>
));

  return (
    <ul>{renderSongs}</ul>
  )
}

export default SongsList