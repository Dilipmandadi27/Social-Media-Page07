import React from "react";
// import { connect } from "react-redux";
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

const DetailsPages = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const selectedPost = useSelector(state => state.selectedPost);

   if (!selectedPost || selectedPost.id !==postId) {
    return <div className="loader">Loading...</div>;
   }

  return (  
    <div className="DetailsPage">
      <div className="heading">
        <h2>Social Media App</h2>
      </div>
      <hr />
      <div className="display-content">
        <h1>Details Page For Post With ID {selectedPost.id}</h1>

        <div className="img-container">
          <img src={`https://picsum.photos/200?random=${selectedPost.id}`} alt="display-image" />
        </div>

        <div className="display-contents">
        <p>User Id: {selectedPost.userId}</p>
          <p>Title: {selectedPost.title}</p>
          <p>Body: {selectedPost.body}</p>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   selectedPost: state.selectedPost,
// });

// export default connect(mapStateToProps)(DetailsPages);

export default DetailsPages;