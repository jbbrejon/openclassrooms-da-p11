import styles from '../../style/Carousel.module.css'
import chevrontLeft from '../../assets/chevron-left.svg'
import chevrontRight from '../../assets/chevron-right.svg'
import { useState } from 'react';


function Carousel({ pictures }) {

    let length = pictures.length;
    console.log(length)
    const [position, setPosition] = useState(0)

    function nextPicture() {
        if (position === length - 1) {
            setPosition(0);
            console.log(position);
        }
        else {
            setPosition(position + 1);
            console.log(position);
        }
    }

    function previousPicture() {
        if (position === 0) {
            setPosition(length - 1)
            console.log(position);
        }
        else {
            setPosition(position - 1);
            console.log(position);
        }
    }

    return (
        <section className={`${styles.section}`}>
            <img className={`${styles.image}`} src={pictures[position]} alt="" />
            <img onClick={previousPicture} className={`${styles.left}`} src={chevrontLeft} alt="" />
            <img onClick={nextPicture} className={`${styles.right}`} src={chevrontRight} alt="" />
            <div className={`${styles.index}`}>{position + 1}/{length}</div>
        </section>
    )
}

export default Carousel