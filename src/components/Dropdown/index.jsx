import styled from 'styled-components'
import colors from '../../utils/style/colors'
import chevronUp from '../../assets/chevron-up.svg'

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
const StyledChevron = styled('img')`

`

const StyledDescription = styled('p')`
display : flex;
color: ${colors.primary};
font-size: 24px;
background-color: ${colors.secondary};
margin:0;
padding: 36px 27px 19px 18px;
`


function Dropdown({ title, description }) {
    return (
        <StyledDropdown>
            <StyledTitle>
                <StyledH2>{title}</StyledH2>
                <StyledChevron src={chevronUp} alt="chevron-up" />
            </StyledTitle>

            <StyledDescription>{description}</StyledDescription>

        </StyledDropdown>
    )
}

export default Dropdown