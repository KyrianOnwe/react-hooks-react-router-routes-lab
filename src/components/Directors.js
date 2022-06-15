import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}<h1>Directors Page</h1>
    {directors.map((dir) => <div key={dir.name}>
        {dir.name}
        <ul>
          {dir.movies.map((mov) => <li key={mov}>{mov}</li>)}
        </ul>
      </div>
    )}
  </div>;
}

export default Directors;
