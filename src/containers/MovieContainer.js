import React, { Component } from 'react'
import { get } from 'lodash'
import { MovieList, DisplayMsg } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovieList, searchMovieList } from '../actions'

class MovieContainer extends Component {
  componentDidMount() {
    const { keyword, movies } = this.props
    if (!keyword) {
      this.props.fetchMovieList()
    }
    if (keyword && movies.length === 0) {
      this.props.searchMovieList(keyword)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { keyword } = nextProps.params
    if (keyword && this.props.params.keyword !== keyword) {
      this.props.searchMovieList(keyword)
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

export default connect(
  (state, ownProps) => ({
    movies: get(state, 'movieList.items'),
    isFetching_movies: get(state, 'movieList.isFetching_movies'),
    keyword: ownProps.params.keyword,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchMovieList,
        searchMovieList,
      },
      dispatch
    )
)(MovieContainer)
