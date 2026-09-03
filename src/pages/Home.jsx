import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerImage from '../assets/banner-home.jpg'
import './Home.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error('Erreur lors du chargement des logements :', error))
  }, [])

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