import styled from "styled-components"
import colors from "../../utils/style/colors"
import { Link } from "react-router-dom"


const StyledContainer = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const StyledError = styled("div")`
font-weight: 700;
font-size:288px;
color: ${colors.primary};
margin-top:174px;
`

const StyledMessage = styled("div")`
font-weight: 500;
font-size: 36px;
color: ${colors.primary};
margin-top: 66px;
`
const StyledLink = styled(Link)`
font-weight: 500;
font-size: 18px;
color: ${colors.primary};
margin-top: 182px;
`

function Error() {
    return (
        <StyledContainer>
            <StyledError>404</StyledError>
            <StyledMessage>Oups! La page que vous demandez n'existe pas</StyledMessage>
            <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </StyledContainer>
    )
}

export default Error