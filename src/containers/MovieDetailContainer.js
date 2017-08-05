import React, { Component } from 'react'
import { MovieDetail, DisplayMsg } from '../components'
import { connect } from 'react-redux'
import { fetchMovieDetail, fetchCastList, fetchTrailerList } from '../actions'

class MovieDetailContainer extends Component {
  componentDidMount() {
    const { dispatch, params: { id } } = this.props
    dispatch(fetchMovieDetail(id))
    dispatch(fetchCastList(id))
    dispatch(fetchTrailerList(id))
  }

  componentWillReceiveProps(nextProps) {
    const { params: { id } } = nextProps
    if (id && this.props.params.id !== id) {
      const { dispatch } = this.props
      dispatch(fetchMovieDetail(id))
      dispatch(fetchCastList(id))
      dispatch(fetchTrailerList(id))
    }
  }

  render() {
    const {
      movie,
      casts,
      trailers,
      isFetcing_movie,
      isFetcing_casts,
      isFetcing_trailers,
    } = this.props

    if (isFetcing_movie || isFetcing_casts || isFetcing_trailers) {
      return <DisplayMsg message="loading..." />
    }
    if (movie.hasOwnProperty('id')) {
      return <MovieDetail movie={movie} casts={casts} trailers={trailers} />
    }
    return <div />
  }
}

function mapStateToProps(state) {
  const { movieDetail, castList, trailerList } = state
  const { isFetcing_movie, item: movie, error_movie } = movieDetail
  const { isFetcing_casts, items: casts, error_casts } = castList
  const { isFetcing_trailers, items: trailers, error_trailers } = trailerList

  return {
    isFetcing_movie,
    movie,
    error_movie,
    isFetcing_casts,
    casts,
    error_casts,
    isFetcing_trailers,
    trailers,
    error_trailers,
  }
}

export default connect(mapStateToProps)(MovieDetailContainer)
