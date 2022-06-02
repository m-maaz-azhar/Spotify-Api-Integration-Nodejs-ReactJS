import React, { useState } from "react";
import Limit from "./components/Limit";
import Searcbar from "./components/Searcbar";
import AllSongs from "./components/AllSongs";
import SelectedSongs from "./components/SelectedSongs";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItems, setselectedItems] = useState([]);
  const [totalSelected, settotalSelected] = useState(0);

  let selection = (e, item) => {
    if (e.target.checked) {
      if (totalSelected <= 9) {
        settotalSelected(1 + totalSelected);
        setselectedItems([...selectedItems, item]);
      } else {
        alert("Limit Exceed!");
      }
    } else {
      let updated_selections = selectedItems;
      updated_selections.splice(
        updated_selections.findIndex((i) => i.id === item.id),
        1
      );
      settotalSelected(totalSelected - 1);
      setselectedItems([...updated_selections]);
    }
  };

  return (
    <>
      <Searcbar setItems={setItems} />
      <Limit totalSelected={totalSelected} />
      <div id="songs_container">
        <AllSongs items={items} selection={selection} />
        <SelectedSongs selectedItems={selectedItems} selection={selection} />
      </div>
    </>
  );
}

export default App;
