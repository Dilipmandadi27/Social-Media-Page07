// src/actions.js
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({
      type: 'FETCH_POSTS_SUCCESS',
      payload: data,
    });
  };
};

export const selectPost = (post) => {
  return {
    type: 'SELECT_POST',
    payload: post,
  };
};
