import { Link } from 'react-router-dom'
import styles from '../../style/Card.module.css'

function Card({ id, title, cover }) {
    return (
        <li className={`${styles.card}`}>
            <div className={`${styles.background}`}>
                <img className={`${styles.cover}`} src={cover} alt="" />
            </div>
            <h2 className={`${styles.title}`}>
                <Link className={`${styles.link}`} to={`/accomodation/${id}`}>{title}</Link>
            </h2>
        </li>
    )
}

export default Card