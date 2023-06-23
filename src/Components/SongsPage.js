import React from 'react'
import { Route } from 'react-router-dom'
import SongsList from './SongsList'
import SongsShow from './SongsShow'

function SongsPage() {
  return (
    <div>
      <SongsList />
    </div>
  )
}

export default SongsPage