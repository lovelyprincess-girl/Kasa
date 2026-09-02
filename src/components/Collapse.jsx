import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleCollapse() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>
          ⌄
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  )
}

export default Collapse