import styled from "styled-components"
import background from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import Dropdown from "../../components/Dropdown"

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
opacity:0.7;
`

const StyledSection = styled('section')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
margin: auto;
`

const dropdownItems = [
    {
        "id": "01",
        "title": "Fiabilité",
        "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        "id": "02",
        "title": "Respect",
        "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        "id": "03",
        "title": "Service",
        "description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        "id": "04",
        "title": "Sécurité",
        "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },

]


function About() {
    return (
        <div>
            <StyledBanner>
                <StyledBackgroundPicture src={background} alt="" />
            </StyledBanner>
            <StyledSection>
                {dropdownItems.map(({ id, title, description }) => (
                    <Dropdown
                        key={id}
                        title={title}
                        description={description}
                    >
                    </Dropdown>
                ))}
            </StyledSection>
        </div>
    )
}

export default About