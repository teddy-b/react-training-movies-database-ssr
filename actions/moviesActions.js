import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_SINGLE_MOVIE_START,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAIL,
  SEARCH_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  SELECT_MOVIE,
  SORT_MOVIES,
  SORT_MOVIES_BY_RELEASE_DATE,
  SORT_MOVIES_BY_RATING,
} from '../constants/actionTypes'
import { API, ITEMS_TO_SHOW, SEARCH_BY, SORT_ORDER } from '../constants/global'

export const fetchMoviesStart = () => ({ type: FETCH_MOVIES_START })

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
})

export const fetchMoviesFail = error => ({
  type: FETCH_MOVIES_FAIL,
  payload: error
})

export const fetchSingleMovieStart = () => ({ type: FETCH_SINGLE_MOVIE_START })

export const fetchSingleMovieSuccess = movie => ({
  type: FETCH_SINGLE_MOVIE_SUCCESS,
  payload: movie
})

export const fetchSingleMovieFail = error => ({
  type: FETCH_SINGLE_MOVIE_FAIL,
  payload: error
})

export const sortMoviesByRelaseDate = () => ({ type: SORT_MOVIES_BY_RELEASE_DATE })

export const sortMoviesByRating = () => ({ type: SORT_MOVIES_BY_RATING })

export const searchMoviesByTitle = () => ({ type: SEARCH_MOVIES_BY_TITLE })

export const searchMoviesByGenre = () => ({ type: SEARCH_MOVIES_BY_GENRE })

export const searchMovies = (searchText, searchBy) => ({
  type: SEARCH_MOVIES,
  payload: {
    searchText,
    searchBy
  }
})

export const sortMovies = sortBy => ({
  type: SORT_MOVIES,
  payload: sortBy
})

export const selectMovie = movieId => ({
  type: SELECT_MOVIE,
  payload: movieId
})
