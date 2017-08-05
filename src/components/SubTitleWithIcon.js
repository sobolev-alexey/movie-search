import React from 'react'
import { Glyphicon } from 'react-bootstrap'

const SubTitleWithIcon = ({ icon, title }) =>
  <h3>
    <Glyphicon glyph={icon} /> {title}
  </h3>

export default SubTitleWithIcon
