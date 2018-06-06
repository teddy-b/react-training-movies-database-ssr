/* global fetch */

import { call, put } from 'redux-saga/effects'
import 'isomorphic-unfetch'

import {
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchSingleMovieFail,
  fetchSingleMovieSuccess,
  searchMovies
} from '../actions'
import { API, ITEMS_TO_SHOW, SEARCH_BY, SORT_ORDER } from '../constants/global'

export function * fetchMoviesSaga(url) {
  try {
    const res = yield fetch(url)
    const movies = yield res.json()
    yield put(fetchMoviesSuccess(movies))
  } catch (error) {
    yield put(fetchMoviesFail(error))
  }
}

export function * searchMoviesSaga(action) {
  const { searchText, searchBy } = action.payload
  yield call(fetchMoviesSaga, `${API}?search=${searchText}&searchBy=${searchBy}&limit=${ITEMS_TO_SHOW}`)
}

export function * sortMoviesSaga(action) {
  const sortBy = action.payload
  yield call(fetchMoviesSaga, `${API}?sortBy=${sortBy}&sortOrder=${SORT_ORDER.desc}&limit=${ITEMS_TO_SHOW}`)
}

export function * selectMovieSaga(action) {
  const movieId = action.payload
  try {
    const res = yield fetch(`${API}/${movieId}`)
    const movie = yield res.json()
    yield put(fetchSingleMovieSuccess(movie))
    yield put(searchMovies(movie.genres[0], SEARCH_BY.genre))
  } catch (err) {
    yield put(fetchSingleMovieFail(err))
  }
}
