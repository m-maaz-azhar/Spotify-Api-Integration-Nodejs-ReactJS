import React from "react";
import SongCard from "./SongCard";

function SelectedSongs({ selectedItems, selection }) {
  return (
    <div id="selected_songs_container">
      <h2>SELECTED ITEMS: </h2>
      {selectedItems.map(item => <SongCard data={item} selection={selection} type={"selected"}/>)}
    </div>
  );
}

export default SelectedSongs;
