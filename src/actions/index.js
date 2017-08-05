import * as types from './actionTypes'
import * as api from '../constants/const'

const searchMovie = searchText => ({
  type: types.SEARCH_MOVIE,
  searchText,
})

const searchMovieSuccess = (data, keyword) => ({
  type: types.SEARCH_MOVIE_SUCCESS,
  data,
  keyword,
})

const searchMovieFail = error => ({
  type: types.SEARCH_MOVIE_FAILURE,
  error,
})

const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
})

const fetchMoviesSuccess = data => ({
  type: types.FETCH_MOVIES_SUCCESS,
  data,
})

const fetchMoviesFail = error => ({
  type: types.FETCH_MOVIES_FAILURE,
  error,
})

const fetchMovie = () => ({
  type: types.FETCH_MOVIE,
})

const fetchMovieSuccess = data => ({
  type: types.FETCH_MOVIE_SUCCESS,
  data,
})

const fetchMovieFail = error => ({
  type: types.FETCH_MOVIE_FAILURE,
  error,
})

const fetchStarSuccess = data => ({
  type: types.FETCH_STAR_SUCCESS,
  data,
})

const fetchStarFail = error => ({
  type: types.FETCH_STAR_FAILURE,
  error,
})

const fetchCasts = () => ({
  type: types.FETCH_CASTS,
})

const fetchCastsSuccess = data => ({
  type: types.FETCH_CASTS_SUCCESS,
  data,
})

const fetchCastsFail = error => ({
  type: types.FETCH_CASTS_FAILURE,
  error,
})

const fetchTrailers = () => ({
  type: types.FETCH_TRAILERS,
})

const fetchTrailersSuccess = data => ({
  type: types.FETCH_TRAILERS_SUCCESS,
  data,
})

const fetchTrailersFail = error => ({
  type: types.FETCH_TRAILERS_FAILURE,
  error,
})

export const searchMovieList = keyword => dispatch => {
  dispatch(searchMovie())
  const url = `${api.URL_SEARCH}${keyword}&${api.API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
    .then(data => dispatch(searchMovieSuccess(data, keyword)))
    .catch(error => dispatch(searchMovieFail(error)))
}

export const fetchMovieList = option => dispatch => {
  dispatch(fetchMovies())
  const withCast = option ? `&with_cast=${option}` : ''
  const url = `${api.URL_LIST}?${api.API_KEY}${withCast}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
    .then(data => dispatch(fetchMoviesSuccess(data)))
    .catch(error => dispatch(fetchMoviesFail(error)))
}

export const fetchMovieDetail = id => dispatch => {
  dispatch(fetchMovie())
  const url = `${api.URL_DETAIL}${id}?${api.API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchMovieSuccess(data)))
    .catch(error => dispatch(fetchMovieFail(error)))
}

export const fetchStarDetail = id => dispatch => {
  dispatch(fetchMovie())
  const url = `${api.URL_PERSON}${id}?${api.API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchStarSuccess(data)))
    .catch(error => dispatch(fetchStarFail(error)))
}

export const fetchCastList = id => dispatch => {
  dispatch(fetchCasts())
  const url = `${api.URL_DETAIL}${id}${api.URL_CAST}?${api.API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.cast)
    .then(data => dispatch(fetchCastsSuccess(data)))
    .catch(error => dispatch(fetchCastsFail(error)))
}

export const fetchTrailerList = id => dispatch => {
  dispatch(fetchTrailers())
  const url = `${api.URL_DETAIL}${id}${api.URL_VIDEO}?${api.API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
    .then(data => {
      const youtubeTrailers = data.filter(trailer => trailer.site === 'YouTube')
      dispatch(fetchTrailersSuccess(youtubeTrailers))
    })
    .catch(error => dispatch(fetchTrailersFail(error)))
}
