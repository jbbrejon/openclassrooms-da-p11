import { useParams } from 'react-router-dom'

function Accomodation() {
    const { id } = useParams()
    return (
        <h1>Logement. ID = {id}</h1>
    )
}

export default Accomodation