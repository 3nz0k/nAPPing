import Select from 'react-select';
import styles from "./graph.module.css";
import { assetPath } from "../../utils/assetPath";

function Graph() {
    return (
        <div className={styles.all}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <img src={assetPath("calendar.svg")} alt="Note" />
                    <p>Historique des siestes</p>
                </div>
                <div className={styles.selectWrapper}>
                    <img src={assetPath("calendar-days.svg")} alt="calendar" className={styles.iconLeft} />
                    <select name="days" id="days">
                        <option value="last_seven_days">7 derniers jours</option>
                        <option value="last_month">Sur le mois</option>
                        <option value="last_year">Sur l'année</option>
                    </select>
                </div>
                {/* <Select/> */}
            </div>
            <div className={styles.duration}>
                <p>Durée moyenne :</p>
                <p id="value">22 min</p>
            </div>
            <img src={assetPath("graph.png")} alt="Graph" />
        </div>
    );
}

export default Graph;
