import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import SongsList from './SongsList'
import SongsShow from './SongsShow'

function SongsPage({ songs }) {
  return (
    <div>
      <SongsList songs={songs}/>
        <Route exact path={match.url}>
          <h3>Choose a song from the list above</h3>
        </Route>
    </div>
  )
}

export default SongsPage