import { useState } from "react";
import styles from "./params.module.css";
import { assetPath } from "../../utils/assetPath";

function Params( {music, setMusic}) {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleChange = (event) => {
        setMusic(event.target.value);
    }

    return (
        <div className={styles.all}>
            <div className={styles.title}>
                <div className={styles.leftTitle}>
                    <img src={assetPath("settings.svg")} alt="settings" />
                    <p>Paramètres</p>
                </div>
                <img src={assetPath("leaves.svg")} alt="leaves" />
            </div>
            <div className={styles.hour}>
                <div className={styles.hourTitle}>
                    <img src={assetPath("clock.svg")} alt="clock" />
                    <p>Heure Quotidienne</p>
                </div>
                <select name="hour" id="hour">
                    {hours.map(hour => (
                        <option key={hour} value={hour}>
                            {String(hour).padStart(2, "0")}:00
                        </option>
                    ))}
                </select>
                <p>Heure à laquelle vous souhaitez faire votre sieste</p>
            </div>
            <hr/>
            <div className={styles.notif}>
                <div className={styles.notifTop}>
                    <div className={styles.notifTitle}>
                        <img src={assetPath("bell.svg")} alt="bell" />
                        <p>Notification</p>
                    </div>
                    <input className={styles.switch} type="checkbox"/>
                </div>
                <p>Recevoir un rappel 10 minutes avant le début de votre sieste</p>
            </div>
            <hr/>
            <div>
                <div className={styles.alarmTitle}>
                    <img src={assetPath("music.svg")} alt="music" />
                    <p>Type d'alarme</p>
                </div>
                <div className={styles.alarm}>
                    <p>Choisissez le son de votre réveil.</p>
                    <div>
                        <input type="radio" id ="birdsong" name="music" value="Birdsong" checked={music === "Birdsong"} onChange={handleChange}/>
                        <label htmlFor="birdsong">Birdsong</label>
                    </div>
                    <div>
                        <input type="radio" id ="waterfall" name="music" value="Waterfall"checked={music === "Waterfall"} onChange={handleChange}/>
                        <label htmlFor="waterfall">Waterfall</label>
                    </div>
                    <button className={styles.alarmButton}>
                        <img src={assetPath("plus.svg")} alt="plus" />
                        <p>Importez votre Alarme</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Params;
