import styled from 'styled-components'
import colors from '../../utils/style/colors'
import chevronUp from '../../assets/chevron-up.svg'
import chevronDown from '../../assets/chevron-down.svg'
import { useState } from 'react'
import styles from '../../style/Collapse.module.css'

const StyledDropdown = styled('div')`
display : flex;
flex-direction: column;
width : 100%;
margin-top: 40px;
`

const StyledTitle = styled('div')`
display : flex;
justify-content: space-between;
background-color: ${colors.primary};
color: white;
padding: 10px 18px;
border-radius : 5px;
margin:0;
`
const StyledH2 = styled('h2')`
margin: 0;
font-size: 24px;
font-weight: 500px;
`

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
        <StyledDropdown>
            <StyledTitle>
                <StyledH2>{title}</StyledH2>
                <img src={chevronDown} alt="chevron-down" onClick={() => handleClick()} />
            </StyledTitle>
        </StyledDropdown>
    )
        : (

            isArray() ? (
                <StyledDropdown>
                    <StyledTitle>
                        <StyledH2>{title}</StyledH2>
                        <img src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                    </StyledTitle>

                    <ul className={`${styles[cssType]}`}>
                        {description.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>

                </StyledDropdown>
            )
                : (
                    <StyledDropdown>
                        <StyledTitle>
                            <StyledH2>{title}</StyledH2>
                            <img src={chevronUp} alt="chevron-up" onClick={() => handleClick()} />
                        </StyledTitle>
                        <p className={`${styles[cssType]}`}>{description}</p>
                    </StyledDropdown>
                )
        )

}

export default Collapse