import React from 'react'
import Poster from './Poster'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

const MovieContainer = ({ id, poster_path }) =>
  <Col xs={6} sm={4} md={3} key={id} className="movie">
    <Link to={`/movie/${id}`}>
      <Poster id={id} path={poster_path} responsive />
    </Link>
  </Col>

const MovieList = ({ movies }) =>
  <Grid fluid={false}>
    <Row>
      {movies.filter(movie => movie.poster_path !== null).map(MovieContainer)}
    </Row>
  </Grid>

export default MovieList
