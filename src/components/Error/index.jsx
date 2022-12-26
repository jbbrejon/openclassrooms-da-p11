import { Link } from "react-router-dom"
import styles from '../../style/Error.module.css'

function Error() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.error}`}>404</div>
            <div className={`${styles.message}`}>Oups! La page que vous demandez n'existe pas</div>
            <Link className={`${styles.link}`} to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error