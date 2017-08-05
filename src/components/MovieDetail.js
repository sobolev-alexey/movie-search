import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap/lib'
import { MovieInfo, Poster, CastList, TrailerList } from '.'
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../constants/const'

const MovieDetail = ({ movie, casts, trailers }) =>
  <Grid fluid={false}>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Poster id={movie.id} path={movie.poster_path} responsive />
      </Col>
      <Col xs={12} sm={6} md={8}>
        <MovieInfo movie={movie} />
        <CastList data={casts.slice(0, CAST_MAX_NUM)} />
      </Col>
    </Row>
    <Row>
      <TrailerList data={trailers.slice(0, TRAILER_MAX_NUM)} />
    </Row>
  </Grid>

export default MovieDetail
