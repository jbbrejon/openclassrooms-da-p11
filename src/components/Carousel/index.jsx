//Import React module
import { useState } from 'react';

// Import CSS module
import styles from '../../styles/Carousel.module.css'

// Import assets
import chevrontLeft from '../../assets/chevron-left.svg'
import chevrontRight from '../../assets/chevron-right.svg'


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
            <div className={`${styles.banner}`}>
                <img className={`${styles.background}`} src={pictures[position]} alt="" />
            </div>
        </section>
    )
        : (
            <section className={`${styles.section}`}>
                <div className={`${styles.banner}`}>
                    <img className={`${styles.background}`} src={pictures[position]} alt="" />
                    <img onClick={previousPicture} className={`${styles.left}`} src={chevrontLeft} alt="" />
                    <img onClick={nextPicture} className={`${styles.right}`} src={chevrontRight} alt="" />
                    <div className={`${styles.indexcontainer}`}><div className={`${styles.index}`} >{position + 1}/{length}</div></div>
                </div>

            </section>
        )
}

export default Carousel