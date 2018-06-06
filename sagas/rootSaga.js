import { all, takeLatest } from 'redux-saga/effects'
import 'isomorphic-unfetch'

import {
  searchMoviesSaga,
  selectMovieSaga,
  sortMoviesSaga
} from './mooviesSaga'
import {
  SEARCH_MOVIES,
  SELECT_MOVIE,
  SORT_MOVIES
} from '../constants/actionTypes'

function * rootSaga() {
  yield all([
    takeLatest(SEARCH_MOVIES, searchMoviesSaga),
    takeLatest(SELECT_MOVIE, selectMovieSaga),
    takeLatest(SORT_MOVIES, sortMoviesSaga)
  ])
}

export default rootSaga
