import { useEffect, useState } from "react"
import styles from "./timeButton.module.css"

function TimeButton({value, onClick, isSelected}) {

    return(
        <div className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`} onClick={onClick}>
            <img src="/clock.svg" alt="clock"/>
            <p>{value}min</p>
        </div>
    )
}

export default TimeButton;