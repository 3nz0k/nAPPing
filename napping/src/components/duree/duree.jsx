import { useState } from "react"

import styles from "./duree.module.css";
import TimeButton from "../timeButton/timeButton";
import ChangeTime from "../changeTime/changeTime";
import { assetPath } from "../../utils/assetPath";

function Duree( {minutes, setMinutes}) {
    // const [time, setMinutes] = useState(0);
    const [customDurationHiglighted, setCustomDurationHighlighted] = useState(false)

    const definedTime = [10, 20, 30];

    function handlerClick(value) {
        setMinutes(value);
    }
    
    function reduceValue(value) {
        if (minutes != 0) setMinutes(minutes - value);
    }

    function augmentValue(value) {
        setMinutes(minutes + value);
    }
    
    return (
        <div className={styles.all}>
            <div className={styles.presetContainer}>
                <div className={styles.text}>
                    <img src={assetPath("clock.svg")} alt="clock" />
                    <p>Durée de la sieste</p>
                </div>
                <div className={styles.buttonDefList}>
                    <TimeButton value="10" onClick={() => {
                        handlerClick(10);
                        setCustomDurationHighlighted(false);
                        }} isSelected={minutes === 10 && !customDurationHiglighted}/>
                    <TimeButton value="20" onClick={() => {
                        handlerClick(20);
                        setCustomDurationHighlighted(false);
                        }}  isSelected={minutes === 20 && !customDurationHiglighted}/>
                    <TimeButton value="30" onClick={() => {
                        handlerClick(30);
                        setCustomDurationHighlighted(false);
                        }}  isSelected={minutes === 30 && !customDurationHiglighted}/>
                </div>
            </div>
            <div className={styles.vertical}>
                <div className={styles.line}></div>
                <p>ou</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.customContainer}>
                <div className={styles.text}>
                    <img src={assetPath("pencil.svg")} alt="pencil"/>
                    <p>Durée&nbsp;personnalisée</p>
                </div>
                <div className={styles.buttonPersoList}>
                    <ChangeTime isPlus="false" onClick={() => {
                        reduceValue(1);
                        setCustomDurationHighlighted(true);
                        }                        
                    }/>
                    <TimeButton value={minutes} onClick={() => handlerClick(minutes)} isSelected={customDurationHiglighted}/>
                    <ChangeTime isPlus="true" onClick={() => {
                        augmentValue(5);
                        setCustomDurationHighlighted(true);
                        }
                    }/>
                </div>
            </div>
        </div>
    )
}

export default Duree;
