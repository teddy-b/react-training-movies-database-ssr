import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  searchMovies,
  searchMoviesByGenre,
  searchMoviesByTitle,
  sortMovies,
  sortMoviesByRating,
  sortMoviesByRelaseDate
} from '../actions'
import { SORT_BY } from '../constants/global'
import Home from '../components/Home'
import './index.scss'

class Index extends Component {
  static async getInitialProps(props) {
    const { query, store } = props.ctx
    if (query.searchText) {
      store.dispatch(searchMovies(query.searchText, query.searchBy))
    }
  }

  render () {
    return (
      <Home {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  count: state.movies.total,
  fetching: state.fetching,
  movies: state.movies.data,
  searchBy: state.searchBy,
  sortBy: state.sortBy
})

const mapDispatchToProps = dispatch => ({
  onSearchMoviesByGenre() {
    dispatch(searchMoviesByGenre())
  },
  onSearchMoviesByTitle() {
    dispatch(searchMoviesByTitle())
  },
  onSortMoviesByRating() {
    dispatch(sortMoviesByRating())
    dispatch(sortMovies(SORT_BY.rating))
  },
  onSortMoviesByRelaseDate() {
    dispatch(sortMoviesByRelaseDate())
    dispatch(sortMovies(SORT_BY.releaseDate))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
