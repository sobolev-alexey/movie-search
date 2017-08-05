import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap/lib'
import { SubTitle, StarInfo, Poster, MovieList } from '.'

const StarDetail = ({ star, movies }) =>
  <Grid fluid={false}>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Poster id={star.id} path={star.profile_path} responsive />
      </Col>
      <Col xs={12} sm={6} md={8}>
        <StarInfo star={star} />
      </Col>
    </Row>
    <Row>
      <SubTitle title={'Known For'} />
      <MovieList movies={movies.slice(0, 4)} />
    </Row>
  </Grid>

export default StarDetail
