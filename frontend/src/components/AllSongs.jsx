import React from "react";
import Pagination from "./Pagination";
import SongCard from "./SongCard";

function AllSongs({ items, selection }) {
  return (
    <div id="all_songs_container">
      <h2>ALL ITEMS: </h2>
      <Pagination
        items={items}
        RenderComponent={SongCard}
        selection={selection}
        pageLimit={5}
        itemsLimit={10}
      />
    </div>
  );
}

export default AllSongs;
