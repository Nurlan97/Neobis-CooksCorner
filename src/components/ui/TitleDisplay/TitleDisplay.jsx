import React from 'react'
import './TitleDisplay.scss'

const TitleDisplay = ({ title, span, lineBreak }) => {
  return (
    <div className='titleDisplay'>
      <div className="titleDisplay__title_container">
        <h1 className="titleDisplay__title">
          
          {title}
          <br />
          {lineBreak}

          <span>
            {span}
          </span>
        </h1>

      </div>
    </div>
  )
}

export default TitleDisplay
