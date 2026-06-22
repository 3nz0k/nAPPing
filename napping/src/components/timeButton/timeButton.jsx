import styles from "./timeButton.module.css"
import { assetPath } from "../../utils/assetPath";

function TimeButton({value, onClick, isSelected}) {

    return(
        <div className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`} onClick={onClick}>
            <img src={assetPath("clock.svg")} alt="clock"/>
            <p>{value}min</p>
        </div>
    )
}

export default TimeButton;
