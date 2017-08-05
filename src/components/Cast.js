import React from 'react'
import { Thumbnail } from 'react-bootstrap/lib'
import { URL_IMG, IMG_SIZE_SMALL } from '../constants/const'

const Cast = ({ cast: { profile_path, name } }) =>
  <Thumbnail src={URL_IMG + IMG_SIZE_SMALL + profile_path} alt={name}>
    <p className="caption">
      {name}
    </p>
  </Thumbnail>

export default Cast
