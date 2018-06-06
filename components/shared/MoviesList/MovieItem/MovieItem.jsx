import Link from 'next/link'

import PropTypes from 'prop-types'

import './MovieItem.scss'

const MovieItem = ({
  genres,
  id,
  poster_path: posterPath,
  release_date: releaseDate,
  title
}) => (
  <Link
    as={`/film/${id}`}
    href={{
      pathname: '/film',
      query: { id }
    }}
  >
    <figure className="movieItem">
      {posterPath && <img className="poster" src={posterPath} alt={title} />}
      <figcaption className="movieInfo">
        <div className="movieYear">{new Date(releaseDate).getFullYear()}</div>
        <div className="movieTitle">{title}</div>
        <div className="movieGenre">{genres.join(', ')}</div>
      </figcaption>
    </figure>
  </Link>
)

MovieItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

MovieItem.defaultProps = { poster_path: '' }

export default MovieItem
