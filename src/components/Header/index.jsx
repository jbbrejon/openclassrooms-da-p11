// Import Reactr module
import { NavLink } from 'react-router-dom'

// Import assets
import logo from '../../assets/logo.svg'

// Import CSS module
import styles from '../../styles/Header.module.css'



function Header() {
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <header className={`${styles.header}`}>
            <img className={`${styles.logo}`} src={logo} alt="logo" />
            <nav className={`${styles.nav}`}>
                <NavLink
                    className={`${styles.navlink}`}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to="/">Accueil</NavLink>
                <NavLink
                    className={`${styles.navlink}`}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to="/a-propos">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header