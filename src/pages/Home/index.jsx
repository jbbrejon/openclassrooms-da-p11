import background from "../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";
import Card from "../../components/Card";
import accomodations from "../../data/logements.json"
import styles from '../../style/Home.module.css'


function Home() {
    return (
        <main className={`${styles.main}`}>
            <div className={`${styles.banner}`}>
                <img className={`${styles.background}`} src={background} alt="" />
                <h1 className={`${styles.title}`}>Chez vous, partout et ailleurs</h1>
            </div>
            <ul className={`${styles.list}`}>
                {accomodations.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    >
                    </Card>
                ))}
            </ul>
        </main>
    )
}

export default Home