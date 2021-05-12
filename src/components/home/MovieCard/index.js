import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
* @author
* @function MovieCard
**/

const MovieCard = (props) => {
    const {movie} = props;
  return(
    <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Button as={Link} variant="primary" to={'/movie/'+ movie.imdbID}>Movie Details <i className="fa fa-chevron-right" /></Button>
        </div>
    </div>
   )

 }

export default MovieCard