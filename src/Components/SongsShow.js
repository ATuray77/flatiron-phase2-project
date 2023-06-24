import React from 'react'
import { useParams } from 'react-router-dom'

function SongsShow({ songs }) {
  console.log(songs)

  const params = useParams(); //this function pulls out the id params
  console.log(params)
  

  return (
    <div>
      <h3>Title: {songs[params.songID].Title}</h3>
      <p>Artist: {songs[params.songID].Artist}</p>
      <p>Style: {songs[params.songID].Style}</p>
      <p>{songs[params.songID].Lyrics}</p>
    </div>
  );
}

export default SongsShow