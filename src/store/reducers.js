import {combineReducers} from 'redux';
import searchReducer from './reducer/searchReducer';

export default combineReducers({
    movies : searchReducer
});