import React, { Component } from 'react'
import { get } from 'lodash'
import { MovieList, DisplayMsg } from '../components'
import { connect } from 'react-redux'
import { fetchMovieList, searchMovieList } from '../actions'

class MovieContainer extends Component {
  componentDidMount() {
    if (!this.props.params.keyword) {
      const { dispatch } = this.props
      dispatch(fetchMovieList())
    }
  }

  componentWillReceiveProps(nextProps) {
    const { keyword } = nextProps.params
    if (keyword && this.props.params.keyword !== keyword) {
      const { dispatch } = this.props
      dispatch(searchMovieList(keyword))
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.movies !== nextProps.movies
  }

  render() {
    const { movies, isFetching_movies } = this.props
    if (movies.length > 0) {
      return <MovieList movies={movies} />
    } else if (isFetching_movies) {
      return <DisplayMsg message="loading..." />
    }
    return <DisplayMsg />
  }
}

export default connect((state, ownProps) => ({
  movies: get(state, 'movieList.items'),
  isFetching_movies: get(state, 'movieList'),
  keyword: ownProps.params.keyword,
}))(MovieContainer)
