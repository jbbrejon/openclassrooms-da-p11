// Import CSS module
import styles from '../../styles/Tag.module.css'

function Tag({ tag }) {
    return (
        <li className={`${styles.tag}`} key={tag}>{tag}</li>
    )
}

export default Tag