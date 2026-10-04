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
        <span className="collapse__icon">
          {isOpen ? (
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path d="M1 8L8 1L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path d="M1 1L8 8L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  )
}

export default Collapse