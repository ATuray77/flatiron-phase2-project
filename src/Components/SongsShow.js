import React from 'react'
import { useParams } from 'react-router-dom'

function SongsShow({ songs }) {
  console.log(songs)

  const params = useParams();
  console.log(params)
  

  return (
    <div>
      <h3>{songs[params.songID].Lyrics}</h3>
    </div>
  );
}

export default SongsShow