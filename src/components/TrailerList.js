import React from 'react'
import Trailer from './Trailer'
import { Col } from 'react-bootstrap'

const TrailerContainer = ({ id, key }) =>
  <Col xs={12} sm={6} md={4} key={id} className="trailer">
    <Trailer trailer={key} />
  </Col>

const TrailerList = ({ data }) => {
  if (!data || data.length === 0) return <div />

  return (
    <div>
      <h3 className="info">Trailers</h3>
      <div className="trailers">
        {data.map(TrailerContainer)}
      </div>
    </div>
  )
}

export default TrailerList
