import chevronUp from '../../assets/chevron-up.svg'
import chevronDown from '../../assets/chevron-down.svg'
import { useState } from 'react'
import styles from '../../style/Collapse.module.css'


function Collapse({ type, title, description }) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const cssType = type;
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
                <h2 className={`${styles.title}`}>{title}</h2>
                <img className={`${styles.chevron}`} src={chevronDown} alt="chevron-down" onClick={() => handleClick()} />
            </div>
        </div>
    )
        : (

            isArray() ? (
                <div className={`${styles.dropdown}`} >
                    <div className={`${styles.bar}`} >
                        <h2 className={`${styles.title}`}>{title}</h2>
                        <img className={`${styles.chevron}`} src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                    </div>

                    <ul className={`${styles[cssType]}`}>
                        {description.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>

                </div>
            )
                : (
                    <div className={`${styles.dropdown}`} >
                        <div className={`${styles.bar}`} >
                            <h2 className={`${styles.title}`}>{title}</h2>
                            <img className={`${styles.chevron}`} src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                        </div>
                        <p className={`${styles[cssType]}`}>{description}</p>
                    </div>
                )
        )

}

export default Collapse