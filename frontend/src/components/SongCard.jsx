import React from "react";

function SongCard({ data, selection, type }) {
  return (
    <div id="all_songs_container">
      <div className="song">
        <img
          src={`${data.album.images[0].url}`}
          height={400}
          width={400}
          alt=""
        />
        <h3 className="song_title">{data.name.toUpperCase()}</h3>
        { type === "selected" ?
          ""
          :
          <p>
            SELECT IT:
            <input type="checkbox" onChange={(e) => selection(e, data)} />
          </p>
        }
      </div>
    </div>
  );
}

export default SongCard;