// src/reducers.js
import { combineReducers } from 'redux';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      console.log('Fetching posts:', action.payload); 
      return action.payload;
    default:
      return state;
  }
};

const selectedPostReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_POST':
      console.log('Selecting post:', action.payload); 
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
});

export default rootReducer;
