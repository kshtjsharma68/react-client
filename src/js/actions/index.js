// src/js/actions

import { ADD_ARTICLE } from "../constants/action-types";

const addArticle = article => ({ type: ADD_ARTICLE, payload: article  });

export { addArticle };