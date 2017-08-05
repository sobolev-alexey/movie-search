import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import { Row, Col } from 'react-bootstrap'

const MovieInfo = ({ movie }) =>
  <div className="info">
    <Row>
      <Title title={movie.title} />
    </Row>
    <Row>
      <Col xs={4} className="movieInfo">
        <SubTitleWithIcon icon={'star'} title={movie.vote_average} />
      </Col>
      <Col xs={4}>
        <SubTitleWithIcon icon={'heart'} title={movie.vote_count} />
      </Col>
      <Col xs={4}>
        <SubTitle title={`Released: ${movie.release_date.substring(0, 4)}`} />
      </Col>
    </Row>
    <Row>
      <Description category={'Overview'} description={movie.overview} />
    </Row>
  </div>

export default MovieInfo
