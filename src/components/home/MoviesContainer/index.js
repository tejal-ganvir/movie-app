import React from 'react';

import {connect} from 'react-redux';
import MovieCard from '../MovieCard';
import { Alert } from 'react-bootstrap';

/**
* @author
* @function MoviesContainer
**/

const MoviesContainer = (props) => {

    const {movies} = props;
    let content = '';

    //console.log(movies);
    if (typeof movies !== 'undefined')
        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) : null ;
    else
        content = <div className="container"><Alert variant="danger">
        No Movies Found</Alert></div> ;

  return(
    <div className="row">
        {content}
    </div>
   )

 }

 const mapStateToProps = state => ({
     movies: state.movies.movies
 })

export default connect(mapStateToProps)(MoviesContainer)