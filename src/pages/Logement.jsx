import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Collapse from '../components/Collapse'
import './Logement.scss'

function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Logement non trouvé')
        }
        return response.json()
      })
      .then((data) => setLogement(data))
      .catch(() => setNotFound(true))
  }, [id])

  if (notFound) {
    return <Navigate to="/404" replace />
  }

  if (!logement) {
    return null
  }

  return (
    <div className="logement">
      <Gallery pictures={logement.pictures} />

      <div className="logement__infos">
        <div className="logement__main">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__host-picture"
            />
          </div>
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`logement__star ${
                  star <= Number(logement.rating) ? 'logement__star--filled' : ''
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement