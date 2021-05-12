import React from 'react';
import Searchform from '../Searchform';
import Spinner from '../../layouts/Spinner';

import {connect} from 'react-redux'
import MoviesContainer from '../MoviesContainer';
import { Container } from 'react-bootstrap';



/**
* @author
* @function Landing
**/

const Landing = (props) => {

    const {loading} = props;

  return(
    <Container>
        <Searchform/>
        { loading ? <Spinner/> : <MoviesContainer/> }
    </Container>
   )

 }

 const mapStateToProps = state => ({
     loading: state.movies.loading
 })

export default connect(mapStateToProps)(Landing);