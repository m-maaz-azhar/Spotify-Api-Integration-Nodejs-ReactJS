import React, { useState } from "react";

function Searcbar({ setItems }) {
  const [query, setQuery] = useState("");

  let search = (query) => {
    console.log("query ", query);
    fetch("http://localhost:7000/getToken")
      .then((response) => response.json())
      .then((token) => {
        console.log("token ", token);
        fetch(
          `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${query}&limit=50`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((r) => r.json())
          .then((songs) => {
            console.log("songs ", songs);
            setItems([...songs.tracks.items]);
          });
      });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search for a song..."
        onChange={(e) => setQuery(e.target.value)}
        id="search_input"
      />

      <button id="search_btn" onClick={() => search(query)}>
        Search
      </button>
    </div>
  );
}

export default Searcbar;
