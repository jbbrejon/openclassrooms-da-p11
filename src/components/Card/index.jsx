// Import React modules
import { Link } from 'react-router-dom'

// Import CSS module
import styles from '../../styles/Card.module.css'

function Card({ id, title, cover }) {
    return (
        <li className={`${styles.card}`}>
            <div className={`${styles.background}`}>
                <img className={`${styles.cover}`} src={cover} alt="" />
            </div>
            <h2 className={`${styles.title}`}>
                <Link className={`${styles.link}`} to={`/logement/${id}`}>{title}</Link>
            </h2>
        </li>
    )
}

export default Card