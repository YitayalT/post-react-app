import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";
import Post from "./Post";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPosthandler = (postData) => {
    setPosts( (existingPost) => [postData, ...existingPost]);
  };
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost = {addPosthandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {posts.map((post) => <Post key= {post.body} author={post.author} body={post.body} />)}
      </ul>
    </>
  );
}

export default PostsList;
