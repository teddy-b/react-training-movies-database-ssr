import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import SortInfo from './SortInfo'

const Header = ({
  count,
  onSearchMoviesByGenre,
  onSearchMoviesByTitle,
  onSortMoviesByRating,
  onSortMoviesByRelaseDate,
  searchBy,
  sortBy
}) => (
  <header className="header">
    <SearchBar
      onSearchMoviesByGenre={onSearchMoviesByGenre}
      onSearchMoviesByTitle={onSearchMoviesByTitle}
      searchBy={searchBy}
    />
    <SortInfo
      count={count}
      onSortMoviesByRating={onSortMoviesByRating}
      onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
      sortBy={sortBy}
    />
  </header>
)

Header.propTypes = {
  count: PropTypes.number.isRequired,
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  onSortMoviesByRating: PropTypes.func.isRequired,
  onSortMoviesByRelaseDate: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired
}

export default Header
