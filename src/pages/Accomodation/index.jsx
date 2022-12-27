import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import accomodations from "../../data/logements.json"
import styles from '../../style/Accomodation.module.css'

function Accomodation() {
    const { id } = useParams();
    let item = accomodations.filter((accomodation) => accomodation.id === id)

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
        </div>
    )
}

export default Accomodation