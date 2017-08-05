import React from 'react'
import { URL_IMG, IMG_SIZE_LARGE } from '../constants/const'
import { Image } from 'react-bootstrap'

const Poster = ({ id, path }) =>
  <Image key={id} src={URL_IMG + IMG_SIZE_LARGE + path} responsive />

export default Poster
