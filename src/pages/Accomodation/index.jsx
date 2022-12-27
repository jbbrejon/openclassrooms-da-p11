import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import accomodations from "../../data/logements.json"
import styles from '../../style/Accomodation.module.css'
import starFilled from '../../assets/star-filled.svg'
import starBlank from '../../assets/star-blank.svg'
import Collapse from '../../components/Collapse'

function Accomodation() {
    const { id } = useParams();
    let item = accomodations.filter((accomodation) => accomodation.id === id)

    function Positive() {
        return <img src={starFilled} alt="" />
    }

    function Negative() {
        return <img src={starBlank} alt="" />
    }

    const filledStars = Array.from({ length: item[0].rating }, (_, index) => {
        return <Positive key={index} />;
    });

    const blankStars = Array.from({ length: 5 - item[0].rating }, (_, index) => {
        return <Negative key={index} />;
    });


    return (
        <div>
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
            </div>
            <div className={`${styles.properties2}`}>
                <ul className={`${styles.tags}`}>
                    {item[0].tags.map((tag) => (
                        <li className={`${styles.tag}`} key={tag}>{tag}</li>
                    ))}
                </ul>
                <div >
                    {filledStars} {blankStars}
                </div>
            </div>
            <div className={`${styles.specs}`}>
                <div className={`${styles.col}`}>
                    <Collapse
                        key="description"
                        type="accomodation"
                        title="Description"
                        description={item[0].description}
                    ></Collapse>
                </div>
                <div className={`${styles.col}`}>
                    <Collapse
                        key="equipements"
                        type="accomodation"
                        title="Equipements"
                        description={item[0].equipments}
                    ></Collapse>
                </div>
            </div>
        </div>
    )
}

export default Accomodation