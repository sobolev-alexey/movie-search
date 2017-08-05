import React from 'react'
import Cast from './Cast'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'

const CastContainer = cast => {
  if (!cast.profile_path) {
    return null
  }
  return (
    <Col xs={4} sm={3} md={2} key={cast.id} className="cast">
      <Link to={'/star/' + cast.id}>
        <Cast cast={cast} />
      </Link>
    </Col>
  )
}

const CastList = ({ data }) =>
  <div>
    <h3>Casts</h3>
    {data.map(CastContainer)}
  </div>

export default CastList
