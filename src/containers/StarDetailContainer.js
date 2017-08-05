import React, { Component } from 'react'
import { get } from 'lodash'
import { StarDetail } from '../components'
import { connect } from 'react-redux'
import { fetchStarDetail, fetchMovieList } from '../actions'

class StarDetailContainer extends Component {
  componentDidMount() {
    const { dispatch, params: { id } } = this.props
    dispatch(fetchStarDetail(id))
    dispatch(fetchMovieList(id))
  }

  render() {
    const { star, movies } = this.props

    if (star.hasOwnProperty('id')) {
      return <StarDetail star={star} movies={movies} />
    }
    return <div />
  }
}

export default connect(state => ({
  star: get(state, 'starDetail.item'),
  movies: get(state, 'movieList.items'),
}))(StarDetailContainer)
