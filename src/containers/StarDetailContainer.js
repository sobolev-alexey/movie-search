import React, { Component } from 'react'
import { get } from 'lodash'
import { StarDetail } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchStarDetail, fetchMovieList } from '../actions'

class StarDetailContainer extends Component {
  componentDidMount() {
    const { fetchStarDetail, fetchMovieList, params: { id } } = this.props
    fetchStarDetail(id)
    fetchMovieList(id)
  }

  render() {
    const { star, movies } = this.props

    if (star.hasOwnProperty('id')) {
      return <StarDetail star={star} movies={movies} />
    }
    return <div />
  }
}

export default connect(
  state => ({
    star: get(state, 'starDetail.item'),
    movies: get(state, 'movieList.items'),
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchStarDetail,
        fetchMovieList,
      },
      dispatch
    )
)(StarDetailContainer)
