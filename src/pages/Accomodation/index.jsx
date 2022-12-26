import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import accomodations from "../../data/logements.json"

function Accomodation() {
    const { id } = useParams();
    let item = accomodations.filter((accomodation) => accomodation.id === id)

    return (
        <div>
            <Carousel pictures={item[0].pictures}></Carousel>
        </div>
    )
}

export default Accomodation