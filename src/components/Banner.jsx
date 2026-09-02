import './Banner.scss'

function Banner({ image, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}

export default Banner