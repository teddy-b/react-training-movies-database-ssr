import PropTypes from 'prop-types'

import Header from './Header'
import Footer from '../Footer'
import ErrorBoundary from '../shared/ErrorBoundary'
import MoviesList from '../shared/MoviesList'

import './Home.scss'

const Home = ({
    count,
    fetching,
    movies,
    onSearchMoviesByGenre,
    onSearchMoviesByTitle,
    onSortMoviesByRating,
    onSortMoviesByRelaseDate,
    searchBy,
    sortBy
  }) => (
  <div className="home">
    <ErrorBoundary>
      <Header
        count={count}
        onSearchMoviesByGenre={onSearchMoviesByGenre}
        onSearchMoviesByTitle={onSearchMoviesByTitle}
        onSortMoviesByRating={onSortMoviesByRating}
        onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
        searchBy={searchBy}
        sortBy={sortBy}
      />
    </ErrorBoundary>
    <ErrorBoundary>
      <MoviesList
        count={count}
        fetching={fetching}
        movies={movies}
      />
    </ErrorBoundary>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </div>
)

Home.propTypes = {
  count: PropTypes.number.isRequired,
  fetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  onSortMoviesByRating: PropTypes.func.isRequired,
  onSortMoviesByRelaseDate: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired
}

export default Home
