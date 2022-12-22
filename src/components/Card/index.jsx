import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/fonts'
import { Link } from 'react-router-dom'


const StyledCard = styled('li')`
display : flex;
flex-direction : column;
margin : 25px;
height:340px;
width:340px;
background-color: ${colors.primary};
`

const StyledCover = styled('img')`
height : 340px;
width: 100%;
object-fit: cover;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
`

const StyledTitle = styled('h2')`
display: flex;
align-items: flex-end;
margin: 20px;
height; 52px;
color: white;
font-family: ${fonts.primary};
font-size: 18px;
font-weight : 500;
margin-top : -65px;
`

function Card({ id, title, cover }) {
    return (
        <StyledCard>
            <StyledCover src={cover} alt="" />
            <StyledTitle>
                <StyledLink to={`/accomodation/${id}`}>{title}</StyledLink>
            </StyledTitle>
        </StyledCard>
    )
}

export default Card