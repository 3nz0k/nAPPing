import styles from "./changeTime.module.css"
import { assetPath } from "../../utils/assetPath";
function ChangeTime( {isPlus , onClick}) {
    return (
        <div className={styles.button} onClick={onClick}>
            <img src={assetPath(isPlus=="true" ? "plus.svg" : "minus.svg")} alt="clock"/>
        </div>
    )
}
export default ChangeTime;
