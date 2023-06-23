import React from 'react'

function SongForm() {
  return (
    <form>
      <label>
        Title
        <input type='text' name='title'/>
      </label>
      <label>
        Artist
        <input type='text' name='artist'/>
      </label>
      <label>
        Style
        <select name='style'>
          <option>praise</option>
          <option>Worship</option>
        </select>
      </label>
      <label>
        Lyrics
        <textarea name='lyrics'>
        </textarea>
      </label>
      <button>Save</button>
    
    </form>
  )
}

export default SongForm