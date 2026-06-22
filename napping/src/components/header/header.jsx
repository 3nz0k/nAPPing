import styles from "./header.module.css";
import { assetPath } from "../../utils/assetPath";
function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={assetPath("logo.png")} alt="logo"/>
                <p>nAPPing</p>
            </div>
            <div className={styles.right}>
                <select name="lang" id="lang-select">
                    <option value="french">FR</option>
                    <option value="english">EN</option>
                </select>
                <img src={assetPath("sun.svg")} alt="dark-logo" />
            </div>
        </header>
    )
}

export default Header;
