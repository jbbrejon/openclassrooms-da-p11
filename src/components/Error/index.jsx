// Import React module
import { Link } from "react-router-dom"

// Import CSS module
import styles from '../../styles/Error.module.css'

function Error() {
    return (
        <main className={`${styles.main}`}>
            <div className={`${styles.error}`}>404</div>
            <div className={`${styles.message}`}>Oups! La page que vous demandez n'existe pas</div>
            <Link className={`${styles.link}`} to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error