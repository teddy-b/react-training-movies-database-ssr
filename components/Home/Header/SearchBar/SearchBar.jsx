import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Logo from '../../../shared/Logo'
import { SEARCH_BY, GENRES } from '../../../../constants/global'

import './SearchBar.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchText: '' }
  }

  render() {
    const {
      onSearchMoviesByGenre,
      onSearchMoviesByTitle,
      searchBy
    } = this.props

    return (
      <div className="searchBar">
        <Logo />
        <p className="searchBarTitle">Find your movie</p>
        <input
          placeholder="Start typing movie title or genre"
          className="searchInput"
          type="text"
          onChange={event => this.setState({ searchText: event.target.value })}
          list="genres"
        />
        {searchBy === SEARCH_BY.genre &&
          <datalist id="genres">
            {GENRES.map(genre => <option key={genre} value={genre} />)}
          </datalist>
        }
        <div className="searchFooter">
          <div className="searchBy">Search by </div>
          <div className="searchByBtns">
            <button
              className={`searchByTitleBtn ${searchBy === SEARCH_BY.title && 'selected'}`}
              onClick={onSearchMoviesByTitle}
            >
              Title
            </button>
            <button
              className={`searchByGenreBtn ${searchBy === SEARCH_BY.genre && 'selected'}`}
              onClick={onSearchMoviesByGenre}
            >
              Genre
            </button>
          </div>
          <Link
            as={`/search/${searchBy}/${this.state.searchText}`}
            href={{
              pathname: '/',
              query: {
                searchBy,
                searchText: this.state.searchText
              }
            }}
          >
            <button className="searchBtn">
              Search
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired
}

export default SearchBar
