// Import React module
import { useParams } from 'react-router-dom'
import Error from '../../components/Error'

// Import components
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'

// Import data
import accomodations from "../../data/logements.json"

// Import assets
import starFilled from '../../assets/star-filled.svg'
import starBlank from '../../assets/star-blank.svg'

// Import CSS module
import styles from '../../styles/Accomodation.module.css'




function Accomodation() {
    const { id } = useParams();
    let item = accomodations.filter((accomodation) => accomodation.id === id)
    let filledStars;
    let blankStars;

    function isValid() {
        if (item.length === 0) {
            console.warn(`Aucun logement trouvé avec l'id: ${id}`)
            return false
        }
        else {
            // Return list of filled stars (positive opinion)
            filledStars = Array.from({ length: item[0].rating }, (_, index) => {
                return <Positive key={index} />;
            });

            // Return list of blank stars (negative opinion)
            blankStars = Array.from({ length: 5 - item[0].rating }, (_, index) => {
                return <Negative key={index} />;
            });


            // Return filled star
            function Positive() {
                return <img className={`${styles.star}`} src={starFilled} alt="" />
            }

            // Return blank star
            function Negative() {
                return <img className={`${styles.star}`} src={starBlank} alt="" />
            }
            return true
        }
    }


    return isValid() ? (
        <main className={`${styles.main}`}>
            <Carousel pictures={item[0].pictures}></Carousel>
            <div className={`${styles.properties}`}>
                <div className={`${styles.accomodation}`}>
                    <h2 className={`${styles.title}`}>{item[0].title}</h2>
                    <div className={`${styles.location}`}>{item[0].location}</div>
                </div>
                <div className={`${styles.host}`}>
                    <div className={`${styles.hostname}`}>{item[0].host.name}</div>
                    <img className={`${styles.hostpicture}`} src={item[0].host.picture} alt="" />
                </div>


                <ul className={`${styles.tags}`}>
                    {item[0].tags.map((tag) => (

                        <Tag key={tag} tag={tag}></Tag>
                    ))}
                </ul>
                <div className={`${styles.stars}`}>
                    {filledStars} {blankStars}
                </div>
            </div>
            <div className={`${styles.specs}`}>
                <div className={`${styles.desc}`}>
                    <Collapse
                        key="description"
                        styleH="accomodation-h"
                        styleP="accomodation-p"
                        title="Description"
                        description={item[0].description}
                    ></Collapse>
                </div>
                <div className={`${styles.equip}`}>
                    <Collapse
                        key="equipements"
                        styleH="accomodation-h"
                        styleP="accomodation-p"
                        title="Equipements"
                        description={item[0].equipments}
                    ></Collapse>
                </div>
            </div>
        </main>
    )
        : (
            <Error></Error>
        )

}

export default Accomodation