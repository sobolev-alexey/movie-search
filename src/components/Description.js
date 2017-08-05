import React from 'react'

const Description = ({ category, description }) => {
  return (
    <div>
      <h3>
        {category}
      </h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Description
