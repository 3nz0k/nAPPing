import { useState, useSyncExternalStore } from "react";

import styles from "./app.module.css";

import Napping from "../napping/napping";
import Duree from "../duree/duree";
import Graph from "../graph/graph";
import Params from "../params/params";
import Header from "../header/header";
import Footer from "../footer/footer";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [music, setMusic] = useState("Birdsong");

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          <section className={styles.napping}>
            <Napping minutes={minutes} music={music} />
          </section>
          <section className={styles.duree}>
            <Duree minutes={minutes} setMinutes={setMinutes} />
          </section>
          <section className={styles.graph}>
            <Graph />
          </section>
        </div>
        <div className={styles.right}>
          <Params music={music} setMusic={setMusic}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
