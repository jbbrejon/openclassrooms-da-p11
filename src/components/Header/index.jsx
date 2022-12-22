import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.svg'


const StyledHeader = styled('header')`
display : flex;
justify-content : space-between;
align-items : center;
margin-top: 40px;
`

const StyledLogo = styled('img')`
height : 62.26px;
`

const StyledLink = styled(Link)`
color: ${colors.primary};
font-size: 24px;
font-weight : 500;
margin-left : 57px;
text-decoration : none;
`

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={logo} alt="logo" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A propos</StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header