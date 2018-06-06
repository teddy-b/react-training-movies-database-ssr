import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectMovie } from '../actions'
import Details from '../components/Details'
import './index.scss'

class Film extends Component {
  static async getInitialProps(props) {
    const { query, store } = props.ctx
    store.dispatch(selectMovie(query.id))
    return { query }
  }

  render () {
    return (
      <Details {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  count: state.movies.total,
  fetching: state.fetching,
  movies: state.movies.data,
  selectedMovie: state.selectedMovie
})

const mapDispatchToProps = dispatch => ({
  onSelectMovie(movieId) {
    dispatch(selectMovie(movieId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Film)
