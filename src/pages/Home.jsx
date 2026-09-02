import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerImage from '../assets/banner-home.jpg'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="home__list">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home