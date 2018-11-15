// src/js/reducers/articles.js

import { ADD_ARTICLE } from "../constants/action-types.js";

const initialState = {
						articles:  []
					};

const articleReducer = ( state = initialState, action) => {
		switch (action.type) {
			case ADD_ARTICLE: 
				return { ...state, articles: [ ...state.articles, action.payload ] };
			default: 
				return state;		 
		}
};

export default articleReducer;