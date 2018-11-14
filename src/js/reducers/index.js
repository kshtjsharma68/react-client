// src/js/reducers

import { ADD_ARTICLES } from "../constants/action-types"; 

const initialState = {
	articles : []
};

const rootReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case ADD_ARTICLE:
			// return {...state, articles: [ ...state.articles, action.payload ] };      //Array.prototype.push is impure function
			return {...state, articles: [...state, action.payload ] };
		default:
			return state;
	}
};

export default rootReducer;