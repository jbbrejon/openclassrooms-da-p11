// Import assets
import chevronUp from '../../assets/chevron-up.svg'
import chevronDown from '../../assets/chevron-down.svg'

// Import React module
import { useState } from 'react'

// Import CSS moudule
import styles from '../../styles/Collapse.module.css'


function Collapse({ styleH, styleP, title, description }) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    let cssH = styleH;
    let cssP = styleP;

    // Change state on click
    function handleClick() {
        if (isCollapsed === true) {
            setIsCollapsed(false);
        }
        else {
            setIsCollapsed(true);
        }
    }

    // Check if property is an array
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