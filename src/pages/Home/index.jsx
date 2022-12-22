import styled from "styled-components";
import background from "../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";
import Card from "../../components/Card";
import accomodations from "../../data/logements.json"


const StyledBanner = styled('div')`
height:223px;
margin-top:68.36px;
background-color: black;
border-radius:25px;
`

const StyledBackgroundPicture = styled('img')`
height:223px;
width: 100%;
object-fit: cover;
border-radius:25px;
opacity:0.5;
`

const StyledH1 = styled('h1')`
display : flex;
justify-content : center;
color: #fff;
font-size: 48px;
font-weight : 500;
margin-top: -140px;
`

const StyledUl = styled('ul')`
display : flex;
flex-wrap : wrap;
margin-top : 25px;
`
const StyledSection = styled('section')`
display: flex;
background-color: #F7F7F7;
margin-top: 130px;
border-radius: 25px;
`






function Home() {

    return (
        <div>
            <StyledBanner>
                <StyledBackgroundPicture src={background} alt="" />
            </StyledBanner>
            <StyledH1>Chez vous, partout et ailleurs</StyledH1>
            <StyledSection>
                <StyledUl>
                    {accomodations.map(({ id, title, cover }) => (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            cover={cover}
                        >
                        </Card>
                    ))}
                </StyledUl>
            </StyledSection>

        </div>
    )
}

export default Home