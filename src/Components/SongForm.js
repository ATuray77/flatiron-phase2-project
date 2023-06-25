
import "./Form.css";

function SongForm({ onFormSubmitted }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);

    fetch("http://localhost:4000/songs", 
          {
            method: "POST",
            headers: {
              "accept": "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
    ).then((r) => r.json())
     .then((addedSong) => onFormSubmitted(addedSong));
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Artist
        <input type="text" name="artist" />
      </label>
      <label>
        Style
        <select name="style">
          <option>praise</option>
          <option>Worship</option>
        </select>
      </label>
      <label>
        Lyrics
        <textarea name="lyrics"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SongForm