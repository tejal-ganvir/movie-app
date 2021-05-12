
import React from 'react';

import {Provider} from 'react-redux';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/home/Landing';

import store from './store/store';
import Movie from './components/home/Movie/movie';

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <Provider store={store} >
      <Router>
        <React.Fragment>
          <Navbar/>
            <Route path="/" exact component={Landing} />
            <Route path="/movie/:id" exact component={Movie} />
          <Footer/>
        </React.Fragment>
      </Router>
    </Provider>
   )

 }

export default App