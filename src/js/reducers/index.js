// src/js/reducers

import { combineReducers } from 'react-redux';
import articleReducer from './articles.js';

export default combineReducers({
	article: articleReducer
});