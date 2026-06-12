import styles from "./header.module.css";
function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo"/>
                <p>nAPPing</p>
            </div>
            <div className={styles.right}>
                <select name="lang" id="lang-select">
                    <option value="french">FR</option>
                    <option value="english">EN</option>
                </select>
                <img src="/sun.svg" alt="dark-logo" />
            </div>
        </header>
    )
}

export default Header;