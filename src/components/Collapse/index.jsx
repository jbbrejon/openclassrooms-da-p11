import chevronUp from '../../assets/chevron-up.svg'
import chevronDown from '../../assets/chevron-down.svg'
import { useState } from 'react'
import styles from '../../style/Collapse.module.css'


function Collapse({ p, h, title, description }) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    let cssP = p;
    let cssH = h;
    function handleClick() {
        if (isCollapsed === true) {
            setIsCollapsed(false);
        }
        else {
            setIsCollapsed(true);
        }
    }

    function isArray() {
        return Array.isArray(description)
    }

    return isCollapsed ? (
        <div className={`${styles.dropdown}`} >
            <div className={`${styles.bar}`} >
                <h2 className={`${styles[cssH]}`}>{title}</h2>
                <img className={`${styles.chevron}`} src={chevronDown} alt="chevron-down" onClick={() => handleClick()} />
            </div>
        </div>
    )
        : (

            isArray() ? (
                <div className={`${styles.dropdown}`} >
                    <div className={`${styles.bar}`} >
                        <h2 className={`${styles[cssH]}`}>{title}</h2>
                        <img className={`${styles.chevron}`} src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                    </div>

                    <ul className={`${styles[cssP]}`}>
                        {description.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>

                </div>
            )
                : (
                    <div className={`${styles.dropdown}`} >
                        <div className={`${styles.bar}`} >
                            <h2 className={`${styles[cssH]}`}>{title}</h2>
                            <img className={`${styles.chevron}`} src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                        </div>
                        <p className={`${styles[cssP]} ${styles.para}`}>{description}</p>
                    </div>
                )
        )

}

export default Collapse