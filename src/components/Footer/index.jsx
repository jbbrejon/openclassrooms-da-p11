import logo from '../../assets/logo_white.svg'
import styles from '../../style/Footer.module.css'



function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <img className={`${styles.logo}`} src={logo} alt="logo" />
            <div className={`${styles.info}`} >© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer