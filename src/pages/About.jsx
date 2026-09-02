import Collapse from '../components/Collapse'
import bannerImage from '../assets/banner-about.jpeg'
import './About.scss'

function About() {
  return (
    <div className="about">
      <div
        className="about__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      <div className="about__collapses">
        <Collapse title="Fiabilité">
          <p>
            Les annonces publiées sur Kasa sont vérifiées par nos équipes
            avant leur mise en ligne, pour vous garantir des informations
            fiables et à jour.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p>
            La bienveillance et le respect sont les fondations de la
            communauté Kasa. Nous veillons à ce que chacun soit traité avec
            considération, qu'il s'agisse d'un hôte ou d'un voyageur.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p>
            Notre équipe est disponible 7j/7 pour vous accompagner à chaque
            étape de votre réservation, et répondre à toutes vos questions.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>
            Vos données personnelles et vos paiements sont protégés grâce à
            des dispositifs de sécurité conformes aux normes en vigueur.
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default About