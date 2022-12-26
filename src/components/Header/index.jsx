import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from '../../style/Header.module.css'



function Header() {
    return (
        <header className={`${styles.header}`}>
            <img className={`${styles.logo}`} src={logo} alt="logo" />
            <nav>
                <Link className={`${styles.link}`} to="/">Accueil</Link>
                <Link className={`${styles.link}`} to="/about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header