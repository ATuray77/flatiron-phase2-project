import React from 'react'
import { Route } from 'react-router-dom'
import SongsList from './SongsList'
import SongsShow from './SongsShow'

function SongsPage({ songs }) {
  return (
    <div>
      <SongsList songs={songs}/>
    </div>
  )
}

export default SongsPage