import styles from '../../style/Carousel.module.css'
import chevrontLeft from '../../assets/chevron-left.svg'
import chevrontRight from '../../assets/chevron-right.svg'
import { useState } from 'react';


function Carousel({ pictures }) {

    let length = pictures.length;
    const [position, setPosition] = useState(0)

    function nextPicture() {
        if (position === length - 1) {
            setPosition(0);
        }
        else {
            setPosition(position + 1);
        }
    }

    function previousPicture() {
        if (position === 0) {
            setPosition(length - 1)
        }
        else {
            setPosition(position - 1);
        }
    }
    // Check if pictures array contains only one element
    function isSingle() {
        if (length === 1) {
            return true
        }
        else {
            return false
        }
    }

    return isSingle() ? (
        <section className={`${styles.section}`}>
            <img className={`${styles.image}`} src={pictures[position]} alt="" />
        </section>
    )
        : (
            <section className={`${styles.section}`}>
                <img className={`${styles.image}`} src={pictures[position]} alt="" />
                <img onClick={previousPicture} className={`${styles.left}`} src={chevrontLeft} alt="" />
                <img onClick={nextPicture} className={`${styles.right}`} src={chevrontRight} alt="" />
                <div className={`${styles.index}`}>{position + 1}/{length}</div>
            </section>
        )
}

export default Carousel