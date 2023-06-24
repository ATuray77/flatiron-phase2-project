
import "./Form.css";

function SongForm() {
const onSubmit = (e) => {
  
}



  return (
    <form  onSubmit={onSubmit}className="form">
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