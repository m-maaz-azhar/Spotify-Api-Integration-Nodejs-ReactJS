import React from "react";

function Limit({ totalSelected }) {
  return (
    <div>
      <hr />
      {<h3>SELECTED #: {totalSelected}</h3>}
      <p>
        <i>limit = 10</i>
      </p>
      <hr />
    </div>
  );
}

export default Limit;
