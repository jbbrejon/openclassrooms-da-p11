// Import assets
import background from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"

// Import component
import Collapse from "../../components/Collapse"

// Import CSS module
import styles from '../../styles/About.module.css'


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
        <main className={`${styles.main}`}>
            <div className={`${styles.banner}`}>
                <img className={`${styles.background}`} src={background} alt="" />
            </div>
            <section className={`${styles.section}`}>
                {dropdownItems.map(({ id, title, description }) => (
                    <Collapse
                        key={id}
                        styleH="about-h"
                        styleP="about-p"
                        title={title}
                        description={description}
                    >
                    </Collapse>
                ))}
            </section>
        </main>
    )
}

export default About