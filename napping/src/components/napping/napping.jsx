import { useEffect, useState } from "react";
import styles from "./napping.module.css";

import useCountdown from "../useCountdown/useCountdown";

function Napping({ minutes }) {
    const { secondsLeft, start, stop } = useCountdown(minutes, () => {
        alert('Temps écoulé !');
    });

    return (
        <div className={styles.all}>
            <div className={styles.napping}>
                <img src="/zzz.svg" alt="zzz" />
                <p>Sieste en cours</p>
            </div>
            <div className={styles.countdown}>
                <p>Temps restant :</p>
                <h1>{secondsLeft}sec</h1>
            </div>
            <div className={styles.progressBar}>
                <progress max={minutes*60} value={minutes*60-secondsLeft}></progress>
                <p>33%</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.leftButton}>
                    <button onClick={start}>
                        <img src="/play.svg" alt="play" />
                        <p>Démarrer</p>
                    </button>
                </div>
                <div className={styles.rightButton}>
                    <button onClick={stop}>
                        <img src="/square.svg" alt="square" />
                        <p>Arrêter</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Napping;
