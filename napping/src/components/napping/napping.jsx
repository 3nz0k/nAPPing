import { useEffect, useState, useRef } from "react";
import styles from "./napping.module.css";

import useCountdown from "../useCountdown/useCountdown";
import ModalAlarm from "../modalAlarm/modalAlarm";

function Napping({ minutes, music, flexGrow}) {
    const [isNow, setIsNow] = useState(false);
    const audioRef = useRef();
    
    const stopAlarm = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsNow(false);
    }
    
    const { secondsLeft, start, stop } = useCountdown(minutes, () => {
        audioRef.current.play();
        setIsNow(true);
    });
    
    useEffect(() => {
        audioRef.current = new Audio(`/src/assets/${music}.mp3`);
    }, [music]);

    const minutesLeft = Math.floor(secondsLeft / 60);
    const remainingSeconds = secondsLeft % 60;
    let formattedTime;

    if (remainingSeconds === 0)
    {
        formattedTime = `${minutesLeft}min` 
    }
    else if (minutesLeft === 0)
    {
        formattedTime = `${secondsLeft}sec`
    }
    else {
        formattedTime = `${minutesLeft}min${remainingSeconds.toString().padStart(2, "0")}`;
    }

    return (
        <div className={styles.all} style={{"flex-grow":flexGrow}}>
            {isNow && <ModalAlarm onClose={stopAlarm}/>}
            <div className={styles.napping}>
                <img src="/zzz.svg" alt="zzz" />
                <p>Sieste en cours</p>
            </div>
            <div className={styles.countdown}>
                <p>Temps restant :</p>
                <h1>{formattedTime}</h1>
            </div>
            <div className={styles.progressBar}>
                <progress max={minutes*60} value={minutes*60-secondsLeft}></progress>
                <p>{Math.round(((minutes * 60 - secondsLeft) / (minutes * 60)) * 100)}%</p>
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
