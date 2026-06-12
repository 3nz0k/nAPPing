import styles from "./changeTime.module.css"
function ChangeTime( {isPlus , onClick}) {
    return (
        <div className={styles.button} onClick={onClick}>
            <img src={isPlus=="true" ? "/plus.svg" : "/minus.svg"} alt="clock"/>
        </div>
    )
}
export default ChangeTime;