import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.all}>
            <div className={styles.footer}>
                <img src="/copyright.svg" alt="copyright" />
                <p>2026 3nz0k</p>
            </div>
        </footer>
    )
}

export default Footer;