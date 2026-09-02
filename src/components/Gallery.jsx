import { useState } from 'react'
import './Gallery.scss'

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const hasMultiplePictures = pictures.length > 1

  function goToPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  function goToNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="gallery">
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1} du logement`}
        className="gallery__image"
      />

      {hasMultiplePictures && (
        <>
          <button
            className="gallery__arrow gallery__arrow--left"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            className="gallery__arrow gallery__arrow--right"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>
          <div className="gallery__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  )
}

export default Gallery