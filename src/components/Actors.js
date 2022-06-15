import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}<h1>Actors Page</h1>
  {actors.map((act) => <div key={act.name}>
      {act.name}
      <ul>
        {act.movies.map((mov) => <li key={mov}>{mov}</li>)}
      </ul>
    </div>
  )}
  </div>;
}

export default Actors;
