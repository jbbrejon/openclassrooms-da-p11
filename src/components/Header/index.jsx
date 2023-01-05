// Import Reactr module
import { Link } from 'react-router-dom'

// Import assets
import logo from '../../assets/logo.svg'

// Import CSS module
import styles from '../../styles/Header.module.css'



function Header() {
    return (
        <header className={`${styles.header}`}>
            <img className={`${styles.logo}`} src={logo} alt="logo" />
            <nav className={`${styles.nav}`}>
                <Link className={`${styles.link}`} to="/">Accueil</Link>
                <Link className={`${styles.link}`} to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header