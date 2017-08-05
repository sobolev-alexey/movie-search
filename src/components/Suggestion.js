import React from 'react'
import noImage from '../images/no_image.svg'
import { URL_IMG, IMG_SIZE_XSMALL } from '../constants/const'
import '../styles/search.css'

const Suggestion = ({ suggestion: { title, year, img } }) =>
  <a>
    <img
      className="searchResult-image"
      alt={title}
      src={img ? URL_IMG + IMG_SIZE_XSMALL + img : noImage}
    />
    <div className="searchResult-text">
      <div className="searchResult-name">
        {title}
      </div>
      {year}
    </div>
  </a>

export default Suggestion
