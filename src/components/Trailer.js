import React from 'react'
import { URL_YOUTUBE } from '../constants/const'

const Trailer = ({ trailer }) =>
  <iframe src={URL_YOUTUBE + trailer} allowFullScreen />

export default Trailer
