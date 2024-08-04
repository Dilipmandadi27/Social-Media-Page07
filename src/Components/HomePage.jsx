import React from "react";
import { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from "react-redux";
import { fetchPosts, selectPost } from "../reduxContainer/SocialAction.js";
import { Link } from "react-router-dom";

const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  // useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSelectPost = (post) => {
    dispatch(selectPost(post));
  };

  return (
    <div className="home-page">
      <div className="heading">
        <h2>Social Media App</h2>
      </div>
      <hr />
      <section className="cards-container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="img-container">
              <img src={`https://picsum.photos/200?random=${post.id}`} alt="display-image" />
            </div>
            <div className="content">
              <p>User ID : {post.userId}</p>
              <p>Title : {post.title.length > 20 ? `${post.title.slice(0, 10)}...` : post.title}</p>

              <p className="para">
                Body : {post.body.length > 50 ? `${post.body.slice(0, 40)}...` : post.body} <br />
                <Link 
                to={`/details/${post.id}`} 
                onClick={() => handleSelectPost(post)}
                  >Read More...</Link>

              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//     posts: state.posts,
//   });
  
//   const mapDispatchToProps = {
//     fetchPosts,
//     selectPost,
//   };


  // export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

  export default HomePage;