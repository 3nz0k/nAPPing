import styles from "./main.module.css";

import Napping from "../napping/napping";
import Duree from "../duree/duree";
import Graph from "../graph/graph";
import { useState, useSyncExternalStore } from "react";

function Main() {
  const [minutes, setMinutes] = useState(0);

  return (
    <div>
      <Napping minutes={minutes} />
      <Duree minutes={minutes} setMinutes={setMinutes} />
      <Graph />
    </div>
  )
}

export default Main;
